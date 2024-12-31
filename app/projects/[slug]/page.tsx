import { projects } from "@/app/data/projects-data";
import { Box, Button, Chip, Container } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projects.map((project) => ({ slug: project.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <Container sx={{ my: 10 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 4 }}>
        <Button href="/projects" variant="outlined">
          Back to Projects
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h1" sx={{ textTransform: "capitalize" }}>
            {project.title}
          </Typography>
          <Typography variant="body1">{project.description}</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {project.technologies.map((technology) => (
              <Chip label={technology} key={technology} />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", md: "20%" },
          }}
        >
          <Button variant="contained">Live Demo</Button>
          <Button variant="contained">Github</Button>
        </Box>
      </Box>
      <Image
        src={`/${project.slug}/${project.slug}-image-1.png`}
        alt={project.title}
        quality={100}
        width={2000}
        height={2000}
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          borderRadius: "10px",
          maxWidth: "100%",
          height: "auto",
          marginTop: 40,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4 }}>
        <Typography variant="h2">Workflow</Typography>
        <Typography variant="body1">{project.workflow}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4 }}>
        <Typography variant="h2">Challenges</Typography>
        <Typography variant="body1">{project.challenges}</Typography>
      </Box>
      <Image
        src={`/${project.slug}/${project.slug}-image-2.png`}
        alt={project.title}
        quality={100}
        width={2000}
        height={2000}
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          borderRadius: "10px",
          maxWidth: "100%",
          height: "auto",
          marginTop: 40,
        }}
      />
    </Container>
  );
}
