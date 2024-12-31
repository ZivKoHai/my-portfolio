import { Container, Typography } from "@mui/material";
import Logo from "./logo";

export default function Footer() {
  return (
    <Container component="footer" sx={{ my: 10 }}>
      <Logo />
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} ZivKoHai. All rights reserved.
      </Typography>
    </Container>
  );
}
