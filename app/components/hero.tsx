import { Box, Button, Container, Paper, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Container>
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          justifyContent: "center",
          minHeight: "80vh",
          backgroundColor: "transparent",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Building Fast, Responsive,
          <br /> Web Applications
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Hi, I&apos;m Ziv Kali, a front-end developer specializing in crafting
          beautiful and functional websites.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained">Contact Me</Button>
          <Button variant="outlined">Projects</Button>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          marginTop: 4,
        }}
      >
        <Box
          component="img"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 1,
            transform: "translate(-50%, -50%)",
            maxWidth: "100%",
            height: "auto",
            borderRadius: 2,
          }}
          alt="Portfolio hero image"
          src="/hero-section-image.png"
        />
      </Paper>
    </Container>
  );
}
