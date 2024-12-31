import { Box, Button, Container, Typography } from "@mui/material";
import ContactForm from "./ui/contact-form";

export default function ContactUs() {
  return (
    <Container
      sx={{
        my: 10,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <Container
        sx={{
          my: 10,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h2" sx={{ textTransform: "capitalize" }}>
          lets work together
        </Typography>
        <Typography variant="body1">
          I&apos;m always open to new opportunities and collaborations. Whether
          you have a project in mind or just want to say hi, I&apos;m here to
          help.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="primary">
            whatsapp
          </Button>
          <Button variant="outlined" color="primary">
            linkedin
          </Button>
        </Box>
      </Container>
      <ContactForm />
    </Container>
  );
}
