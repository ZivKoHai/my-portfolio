import { Box, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      sx={{
        marginTop: 4,
        minHeight: { xs: "100vh", md: "60vh" },
        overflow: "hidden",
        padding: 4,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
        }}
      >
        Hi, I&apos;m a passionate front-end developer with a knack for
        <br /> creating engaging user experiences.
      </Typography>

      <Box
        component="img"
        src="/left-icon-about-me.svg"
        alt="About section image 1"
        sx={{
          position: "absolute",
          width: "200px",

          height: "auto",
          borderRadius: 2,
          left: { xs: "50%", md: "0" },
          transform: { xs: "translateX(-50%)", md: "none" },
          top: { xs: "20px", md: "50%" },
          marginTop: { xs: 0, md: "-150px" },
          rotate: { xs: "160deg", md: "0deg" },
          transformOrigin: { xs: "left", md: "initial" },
        }}
      />
      <Box
        component="img"
        src="/right-icon-about-me.svg"
        alt="About section image 2"
        sx={{
          position: "absolute",
          width: "200px",
          height: "auto",
          borderRadius: 2,
          right: { xs: "50%", md: "0" },
          transform: { xs: "translateX(50%)", md: "none" },
          top: { xs: "60%", md: "40%" },
          rotate: { xs: "150deg", md: "0deg" },
          transformOrigin: { xs: "right", md: "initial" },
          marginTop: { xs: 0, md: "-150px" },
        }}
      />
    </Box>
  );
}
