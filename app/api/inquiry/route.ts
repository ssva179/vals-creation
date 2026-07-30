import { NextResponse } from "next/server";
import { Resend } from "resend";

import BusinessInquiry from "@/emails/BusinessInquiry";
import CustomerConfirmation from "@/emails/CustomerConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

type InquiryRequest = {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    preferredContact?: unknown;
    eventType?: unknown;
    eventDate?: unknown;
    startTime?: unknown;
    endTime?: unknown;
    guestCount?: unknown;
    serviceType?: unknown;
    foodOption?: unknown;
    otherFoodOption?: unknown;
    interactiveOption?: unknown;
    otherInteractiveOption?: unknown;
    marqueeType?: unknown;
    marqueeNumbers?: unknown;
    otherService?: unknown;
    addAdditionalServices?: unknown;
    additionalServices?: unknown;
    additionalServiceDetails?: unknown;
    message?: unknown;
};

function getString(value: unknown) {
    return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is missing.");

            return NextResponse.json(
                {
                    error: "The email service is not configured.",
                },
                {
                    status: 500,
                },
            );
        }

        const body = (await request.json()) as InquiryRequest;

        const name = getString(body.name);
        const email = getString(body.email);
        const phone = getString(body.phone);
        const preferredContact = getString(body.preferredContact);
        const eventType = getString(body.eventType);
        const eventDate = getString(body.eventDate);
        const startTime = getString(body.startTime);
        const endTime = getString(body.endTime);
        const guestCount = getString(body.guestCount);
        const serviceType = getString(body.serviceType);
        const foodOption = getString(body.foodOption);
        const otherFoodOption = getString(body.otherFoodOption);
        const interactiveOption = getString(body.interactiveOption);
        const otherInteractiveOption = getString(
            body.otherInteractiveOption,
        );
        const marqueeType = getString(body.marqueeType);
        const marqueeNumbers = getString(body.marqueeNumbers);
        const otherService = getString(body.otherService);
        const addAdditionalServices = getString(
            body.addAdditionalServices,
        );
        const additionalServiceDetails = getString(
            body.additionalServiceDetails,
        );
        const message = getString(body.message);

        const additionalServices = Array.isArray(
            body.additionalServices,
        )
            ? body.additionalServices
                .filter(
                    (service): service is string =>
                        typeof service === "string",
                )
                .map((service) => service.trim())
                .filter(Boolean)
            : [];

        if (
            !name ||
            !email ||
            !preferredContact ||
            !eventType ||
            !eventDate ||
            !startTime ||
            !endTime ||
            !guestCount ||
            !serviceType ||
            !addAdditionalServices ||
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

        if (preferredContact === "phone" && !phone) {
            return NextResponse.json(
                {
                    error: "Please provide a phone number.",
                },
                {
                    status: 400,
                },
            );
        }

        if (serviceType === "food-cart-experience" && !foodOption) {
            return NextResponse.json(
                {
                    error: "Please select a food cart option.",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            serviceType === "food-cart-experience" &&
            foodOption === "other" &&
            !otherFoodOption
        ) {
            return NextResponse.json(
                {
                    error: "Please describe the food option you want.",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            serviceType === "interactive-experience" &&
            !interactiveOption
        ) {
            return NextResponse.json(
                {
                    error: "Please select an interactive experience.",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            serviceType === "interactive-experience" &&
            interactiveOption === "other" &&
            !otherInteractiveOption
        ) {
            return NextResponse.json(
                {
                    error: "Please describe the interactive experience.",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            serviceType === "marquee-letters" &&
            !marqueeType
        ) {
            return NextResponse.json(
                {
                    error: "Please select a marquee option.",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            serviceType === "marquee-letters" &&
            marqueeType === "numbers" &&
            !marqueeNumbers
        ) {
            return NextResponse.json(
                {
                    error: "Please provide the requested marquee numbers.",
                },
                {
                    status: 400,
                },
            );
        }

        if (serviceType === "other" && !otherService) {
            return NextResponse.json(
                {
                    error: "Please describe the service you want.",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            addAdditionalServices === "yes" &&
            additionalServices.length === 0
        ) {
            return NextResponse.json(
                {
                    error: "Please select at least one additional service.",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            addAdditionalServices === "yes" &&
            !additionalServiceDetails
        ) {
            return NextResponse.json(
                {
                    error: "Please provide details about the additional services.",
                },
                {
                    status: 400,
                },
            );
        }

        const businessEmail =
            process.env.VALS_CREATIONS_EMAIL;

        const senderEmail =
            process.env.RESEND_FROM_EMAIL;

        if (!businessEmail || !senderEmail) {
            console.error(
                "VALS_CREATIONS_EMAIL or RESEND_FROM_EMAIL is missing.",
            );

            return NextResponse.json(
                {
                    error: "The email recipient is not configured.",
                },
                {
                    status: 500,
                },
            );
        }

        const businessResult = await resend.emails.send({
            from: `Val's Creations <${senderEmail}>`,
            to: [businessEmail],
            replyTo: email,
            subject: `New inquiry from ${name}`,
            react: BusinessInquiry({
                name,
                email,
                phone,
                preferredContact,
                eventDate,
                eventType,
                startTime,
                endTime,
                guestCount,
                serviceType,
                foodOption,
                otherFoodOption,
                interactiveOption,
                otherInteractiveOption,
                marqueeType,
                marqueeNumbers,
                otherService,
                additionalServices,
                additionalServiceDetails,
                message,
            }),
        });

        if (businessResult.error) {
            console.error(
                "Business email error:",
                businessResult.error,
            );

            return NextResponse.json(
                {
                    error: "The inquiry could not be delivered.",
                },
                {
                    status: 500,
                },
            );
        }

        const confirmationResult = await resend.emails.send({
            from: `Val's Creations <${senderEmail}>`,
            to: [email],
            replyTo: businessEmail,
            subject: "We received your inquiry",
            react: CustomerConfirmation({
                name,
                eventDate,
            }),
        });

        if (confirmationResult.error) {
            console.error(
                "Confirmation email error:",
                confirmationResult.error,
            );

            return NextResponse.json(
                {
                    error:
                        "Your inquiry was delivered, but the confirmation email could not be sent.",
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