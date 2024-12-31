import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "10rem", color: "primary.main" }}
      >
        404
      </Typography>
      <Typography variant="h2" sx={{ fontSize: "2rem" }}>
        Page Not Found
      </Typography>
      <Link href="/">
        <Button variant="contained" sx={{ mt: 2 }}>
          Go to Home
        </Button>
      </Link>
    </Container>
  );
}
