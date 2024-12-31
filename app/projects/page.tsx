import { Box, Container, Typography } from "@mui/material";
import { projects } from "@/data/projects-data";
import WorkBlock from "../components/ui/work-block";

export default function ProjectsPage() {
  return (
    <Container sx={{ my: 10 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h1">Projects</Typography>
        <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
          this is a collection of some of the work i did in the past months
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {projects.map((project, index) => (
          <WorkBlock key={project.slug} project={project} index={index + 1} />
        ))}
      </Box>
    </Container>
  );
}
