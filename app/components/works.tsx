import { Typography } from "@mui/material";

import { Container } from "@mui/material";
import WorkBlock from "@/components/ui/work-block";
import { projects } from "@/app/data/projects-data";

const Works = () => {
  return (
    <Container sx={{ my: 10 }}>
      <Typography variant="h2" sx={{ textTransform: "capitalize" }}>
        some of the work i did
      </Typography>
      {projects.map((project, index) => (
        <WorkBlock key={project.slug} project={project} index={index + 1} />
      ))}
    </Container>
  );
};

export default Works;
