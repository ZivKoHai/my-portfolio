import { Box, Button, Container, Typography } from "@mui/material";
import ContactForm from "../components/ui/contact-form";

export default function ContactPage() {
  return (
    <Container>
      <Box
        sx={{
          my: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h1">Im up for any project</Typography>
        <Typography variant="body1">
          I&apos;m always looking for new challenges and opportunities to work
          on interesting projects. If you have a project in mind, I&apos;d love
          to hear from you.
        </Typography>
        <a href="https://wa.me/972527772564" target="_blank">
          <Button variant="contained" sx={{ mt: 2 }}>
            Contact Me On Whatsapp
          </Button>
        </a>
        <Typography variant="body2">
          Or you can leave me a message here in the form below
        </Typography>
      </Box>
      <ContactForm />
    </Container>
  );
}
