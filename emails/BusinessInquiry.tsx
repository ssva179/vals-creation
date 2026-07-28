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
    eventDate: string;
    eventType: string;
    services: string[];
    message: string;
};

export default function BusinessInquiry({
                                            name,
                                            email,
                                            phone,
                                            eventDate,
                                            eventType,
                                            services,
                                            message,
                                        }: BusinessInquiryProps) {
    return (
        <Html>
            <Head />

            <Preview>New event inquiry from {name}</Preview>

            <Body style={body}>
                <Container style={container}>
                    <Text style={eyebrow}>VAL&apos;S CREATIONS</Text>

                    <Heading style={heading}>New Event Inquiry</Heading>

                    <Text style={intro}>
                        A new inquiry was submitted through the website.
                    </Text>

                    <Hr style={divider} />

                    <Section>
                        <Text style={label}>Name</Text>
                        <Text style={value}>{name}</Text>

                        <Text style={label}>Email</Text>
                        <Text style={value}>{email}</Text>

                        <Text style={label}>Phone</Text>
                        <Text style={value}>
                            {phone?.trim() || "Not provided"}
                        </Text>

                        <Text style={label}>Event date</Text>
                        <Text style={value}>{eventDate}</Text>

                        <Text style={label}>Event type</Text>
                        <Text style={value}>{eventType}</Text>

                        <Text style={label}>Services</Text>
                        <Text style={value}>
                            {services.length > 0
                                ? services.join(", ")
                                : "None selected"}
                        </Text>

                        <Text style={label}>Event details</Text>
                        <Text style={messageStyle}>{message}</Text>
                    </Section>

                    <Hr style={divider} />

                    <Text style={footer}>
                        Reply directly to this email to respond to {name}.
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

const label = {
    color: "#9b7945",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1.4px",
    margin: "20px 0 4px",
    textTransform: "uppercase" as const,
};

const value = {
    color: "#4e4844",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "0",
};

const messageStyle = {
    ...value,
    whiteSpace: "pre-wrap" as const,
};

const footer = {
    color: "#958d87",
    fontSize: "13px",
    lineHeight: "20px",
    margin: "0",
    textAlign: "center" as const,
};