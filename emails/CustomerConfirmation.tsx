import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Text,
} from "@react-email/components";

type CustomerConfirmationProps = {
    name: string;
    eventDate: string;
};

export default function CustomerConfirmation({
                                                 name,
                                                 eventDate,
                                             }: CustomerConfirmationProps) {
    const firstName = name.trim().split(/\s+/)[0] || name;

    return (
        <Html>
            <Head />

            <Preview>We received your Val&apos;s Creations inquiry</Preview>

            <Body style={body}>
                <Container style={container}>
                    <Text style={star}>✦</Text>

                    <Text style={eyebrow}>VAL&apos;S CREATIONS</Text>

                    <Heading style={heading}>
                        Thank You for Reaching Out
                    </Heading>

                    <Hr style={divider} />

                    <Text style={paragraph}>Hi {firstName},</Text>

                    <Text style={paragraph}>
                        We received your inquiry and are excited to learn more
                        about your celebration.
                    </Text>

                    <Text style={paragraph}>
                        Your requested event date is{" "}
                        <strong>{eventDate}</strong>. A member of our team will
                        review the details and reach out within 24–48 hours.
                    </Text>

                    <Text style={paragraph}>
                        We can&apos;t wait to help bring your vision to life.
                    </Text>

                    <Text style={signature}>
                        Warmly,
                        <br />
                        Val&apos;s Creations
                    </Text>

                    <Hr style={divider} />

                    <Text style={footer}>
                        This is an automatic confirmation that your inquiry was
                        received.
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
    padding: "44px",
};

const star = {
    color: "#b88941",
    fontSize: "28px",
    margin: "0 0 12px",
    textAlign: "center" as const,
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
    fontSize: "31px",
    fontWeight: "500",
    lineHeight: "40px",
    margin: "0",
    textAlign: "center" as const,
};

const divider = {
    borderColor: "#d8bd8c",
    margin: "28px 0",
};

const paragraph = {
    color: "#655e5a",
    fontSize: "16px",
    lineHeight: "27px",
};

const signature = {
    color: "#655e5a",
    fontSize: "16px",
    lineHeight: "27px",
    marginTop: "28px",
};

const footer = {
    color: "#958d87",
    fontSize: "12px",
    lineHeight: "19px",
    textAlign: "center" as const,
};