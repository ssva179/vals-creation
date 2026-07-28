import { NextResponse } from "next/server";
import { Resend } from "resend";

import BusinessInquiry from "@/emails/BusinessInquiry";
import CustomerConfirmation from "@/emails/CustomerConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

type InquiryRequest = {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    eventDate?: unknown;
    eventType?: unknown;
    services?: unknown;
    message?: unknown;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as InquiryRequest;

        const name =
            typeof body.name === "string" ? body.name.trim() : "";

        const email =
            typeof body.email === "string" ? body.email.trim() : "";

        const phone =
            typeof body.phone === "string" ? body.phone.trim() : "";

        const eventDate =
            typeof body.eventDate === "string"
                ? body.eventDate.trim()
                : "";

        const eventType =
            typeof body.eventType === "string"
                ? body.eventType.trim()
                : "";

        const message =
            typeof body.message === "string"
                ? body.message.trim()
                : "";

        const services = Array.isArray(body.services)
            ? body.services.filter(
                (service): service is string =>
                    typeof service === "string",
            )
            : [];

        if (
            !name ||
            !email ||
            !eventDate ||
            !eventType ||
            !message
        ) {
            return NextResponse.json(
                {
                    error: "Please complete all required fields.",
                },
                {
                    status: 400,
                },
            );
        }

        const testEmail = process.env.VALS_CREATIONS_EMAIL;

        if (!testEmail) {
            console.error("RESEND_TEST_EMAIL is missing.");

            return NextResponse.json(
                {
                    error: "The email recipient is not configured.",
                },
                {
                    status: 500,
                },
            );
        }

        /*
         * While using onboarding@resend.dev, both messages must go
         * to the email associated with your Resend account.
         */
        const [businessResult, confirmationResult] =
            await Promise.all([
                resend.emails.send({
                    from: "Val's Creations <onboarding@resend.dev>",
                    to: [testEmail],
                    replyTo: email,
                    subject: `New inquiry from ${name}`,
                    react: BusinessInquiry({
                        name,
                        email,
                        phone,
                        eventDate,
                        eventType,
                        services,
                        message,
                    }),
                }),

                resend.emails.send({
                    from: "Val's Creations <onboarding@resend.dev>",
                    to: [testEmail],
                    subject: `Confirmation for ${name}'s inquiry`,
                    react: CustomerConfirmation({
                        name,
                        eventDate,
                    }),
                }),
            ]);

        if (businessResult.error) {
            console.error(
                "Business email error:",
                businessResult.error,
            );

            return NextResponse.json(
                {
                    error: "The business email could not be sent.",
                },
                {
                    status: 500,
                },
            );
        }

        if (confirmationResult.error) {
            console.error(
                "Confirmation email error:",
                confirmationResult.error,
            );

            return NextResponse.json(
                {
                    error: "The confirmation email could not be sent.",
                },
                {
                    status: 500,
                },
            );
        }

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error("Inquiry route error:", error);

        return NextResponse.json(
            {
                error: "Something went wrong while submitting the inquiry.",
            },
            {
                status: 500,
            },
        );
    }
}