import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

type BusinessInquiryProps = {
    name: string;
    email: string;
    phone?: string;
    preferredContact: string;
    eventDate: string;
    eventType: string;
    startTime: string;
    endTime: string;
    guestCount: string;
    serviceType: string;
    foodOption?: string;
    otherFoodOption?: string;
    interactiveOption?: string;
    otherInteractiveOption?: string;
    marqueeType?: string;
    marqueeNumbers?: string;
    otherService?: string;
    additionalServices: string[];
    additionalServiceDetails?: string;
    message: string;
};

const labels: Record<string, string> = {
    email: "Email",
    phone: "Phone",
    birthday: "Birthday",
    wedding: "Wedding",
    "baby-shower": "Baby Shower",
    "bridal-shower": "Bridal Shower",
    graduation: "Graduation",
    corporate: "Corporate Event",
    holiday: "Holiday Celebration",
    other: "Other",
    "food-cart-experience": "Food Cart Experience",
    "cart-rental-only": "Cart Rental Only",
    "interactive-experience": "Interactive Experience",
    "marquee-letters": "Marquee Letters",
    charcuterie: "Charcuterie",
    "snack-cart": "Snack Cart",
    "cotton-candy": "Cotton Candy",
    "paleta-cart": "Paleta Cart",
    elote: "Elote",
    "dubai-chocolate": "Dubai Chocolate",
    "waffle-stick": "Waffle Stick",
    "bloom-bar": "Bloom Bar",
    "onesie-decorating-station":
        "Onesie Decorating Station",
    "candy-bar": "Candy Bar",
    grad: "GRAD",
    numbers: "Numbers",
};

function formatLabel(value?: string) {
    if (!value) {
        return "Not provided";
    }

    return (
        labels[value] ??
        value
            .split("-")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() +
                    word.slice(1),
            )
            .join(" ")
    );
}

function Detail({
                    label,
                    children,
                }: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <Text style={labelStyle}>{label}</Text>
            <Text style={valueStyle}>{children}</Text>
        </>
    );
}

export default function BusinessInquiry({
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
                                        }: BusinessInquiryProps) {
    return (
        <Html>
            <Head />

            <Preview>New event inquiry from {name}</Preview>

            <Body style={body}>
                <Container style={container}>
                    <Text style={eyebrow}>
                        VAL&apos;S CREATIONS
                    </Text>

                    <Heading style={heading}>
                        New Event Inquiry
                    </Heading>

                    <Text style={intro}>
                        A new inquiry was submitted through the
                        website.
                    </Text>

                    <Hr style={divider} />

                    <Section>
                        <Detail label="Name">{name}</Detail>

                        <Detail label="Email">{email}</Detail>

                        <Detail label="Phone">
                            {phone || "Not provided"}
                        </Detail>

                        <Detail label="Preferred contact">
                            {formatLabel(preferredContact)}
                        </Detail>

                        <Detail label="Event type">
                            {formatLabel(eventType)}
                        </Detail>

                        <Detail label="Event date">
                            {eventDate}
                        </Detail>

                        <Detail label="Event time">
                            {startTime}–{endTime}
                        </Detail>

                        <Detail label="Estimated guests">
                            {guestCount}
                        </Detail>

                        <Detail label="Primary service">
                            {formatLabel(serviceType)}
                        </Detail>

                        {serviceType ===
                            "food-cart-experience" && (
                                <Detail label="Food cart option">
                                    {foodOption === "other"
                                        ? otherFoodOption
                                        : formatLabel(foodOption)}
                                </Detail>
                            )}

                        {serviceType ===
                            "interactive-experience" && (
                                <Detail label="Interactive experience">
                                    {interactiveOption === "other"
                                        ? otherInteractiveOption
                                        : formatLabel(
                                            interactiveOption,
                                        )}
                                </Detail>
                            )}

                        {serviceType === "marquee-letters" && (
                            <>
                                <Detail label="Marquee option">
                                    {formatLabel(marqueeType)}
                                </Detail>

                                {marqueeType === "numbers" && (
                                    <Detail label="Numbers requested">
                                        {marqueeNumbers}
                                    </Detail>
                                )}
                            </>
                        )}

                        {serviceType === "other" && (
                            <Detail label="Requested service">
                                {otherService}
                            </Detail>
                        )}

                        <Detail label="Additional services">
                            {additionalServices.length > 0
                                ? additionalServices
                                    .map(formatLabel)
                                    .join(", ")
                                : "None selected"}
                        </Detail>

                        {additionalServiceDetails && (
                            <Detail label="Additional service details">
                                {additionalServiceDetails}
                            </Detail>
                        )}

                        <Text style={labelStyle}>
                            Additional event details
                        </Text>

                        <Text style={messageStyle}>
                            {message}
                        </Text>
                    </Section>

                    <Hr style={divider} />

                    <Text style={footer}>
                        Reply directly to this email to respond to{" "}
                        {name}.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const body = {
    backgroundColor: "#fbf7f2",
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "32px 12px",
};

const container = {
    backgroundColor: "#fffdfa",
    border: "1px solid #e2cfaa",
    margin: "0 auto",
    maxWidth: "600px",
    padding: "40px",
};

const eyebrow = {
    color: "#c48276",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
    margin: "0 0 16px",
    textAlign: "center" as const,
};

const heading = {
    color: "#3f3a37",
    fontSize: "32px",
    fontWeight: "500",
    margin: "0",
    textAlign: "center" as const,
};

const intro = {
    color: "#756e69",
    fontSize: "16px",
    lineHeight: "26px",
    textAlign: "center" as const,
};

const divider = {
    borderColor: "#d8bd8c",
    margin: "28px 0",
};

const labelStyle = {
    color: "#9b7945",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1.4px",
    margin: "20px 0 4px",
    textTransform: "uppercase" as const,
};

const valueStyle = {
    color: "#4e4844",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "0",
};

const messageStyle = {
    ...valueStyle,
    whiteSpace: "pre-wrap" as const,
};

const footer = {
    color: "#958d87",
    fontSize: "13px",
    lineHeight: "20px",
    margin: "0",
    textAlign: "center" as const,
};