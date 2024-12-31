import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        color: "#333333",
        borderBottom: "2px solid #eaeaea",
        paddingBottom: "10px",
        marginBottom: "20px",
      }}
    >
      New Contact Form Submission
    </h1>
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "15px",
        borderRadius: "4px",
      }}
    >
      <p style={{ fontSize: "16px", margin: "8px 0" }}>
        <strong>Name:</strong> {firstName}
      </p>
      <p style={{ fontSize: "16px", margin: "8px 0" }}>
        <strong>Email:</strong> {email}
      </p>
      <p style={{ fontSize: "16px", margin: "8px 0" }}>
        <strong>Message:</strong>
      </p>
      <p
        style={{
          backgroundColor: "#ffffff",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #eaeaea",
        }}
      >
        {message}
      </p>
    </div>
  </div>
);
