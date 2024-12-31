import { Box, Typography } from "@mui/material";

import { Container } from "@mui/material";

const technicalSkills = [
  {
    title: "Frontend",
    description: "html, css, typescript, react, next js",
    image: "/technical_skill_1.png",
  },
  {
    title: "Design & Development",
    description: "figma, adobe photoshop, adobe illustrator",
    image: "/technical_skill_2.png",
  },
  {
    title: "Tools I Use",
    description: "chatgpt,cursor IDE ,",
    image: "/technical_skill_3.png",
  },
];

export default function TechnicalSkills() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h2" sx={{ textTransform: "capitalize" }}>
        technical skills
      </Typography>
      {technicalSkills.map((skill, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: "100%",
            my: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              minHeight: "400px",
              padding: 4,
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundImage: `url(${skill.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography variant="h5" sx={{ color: "#080808" }}>
              {skill.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "primary.contrastText", fontWeight: 500 }}
            >
              {skill.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Container>
  );
}
