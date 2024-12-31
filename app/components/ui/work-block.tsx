import { Box, Button, Chip, Typography } from "@mui/material";
import { Project } from "@/app/data/projects-data";
import Link from "next/link";

interface WorkBlockProps {
  project: Project;
  index: number;
}

export default function WorkBlock({ project, index }: WorkBlockProps) {
  const { title, description, mainImage, github } = project;
  return (
    <Box
      sx={{
        borderTop: "1px solid #e0e0e0",
        my: 4,
        display: "flex",
        gap: { xs: 0, md: 4 },
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "space-between",
        paddingBlock: 4,
      }}
    >
      <Box
        sx={{
          flexBasis: "50%",
          minHeight: { xs: "auto", md: "500px" },
          marginTop: { xs: 4, md: 0 },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="body1">
            {index <= 9 ? "0" + index : index}
          </Typography>
          <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {project.technologies.map((technology) => (
              <Chip label={technology} key={technology} />
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href={`/projects/${project.slug}`}>
            <Button variant="contained" color="primary">
              view project
            </Button>
          </Link>
          <Button variant="outlined" href={github}>
            view code
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flexBasis: "50%",
          aspectRatio: "1/1",
          backgroundColor: "#e0e0e0",
          borderRadius: 10,
          objectFit: "cover",
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          maxHeight: "500px",
        }}
        component="img"
        src={mainImage}
        alt={title}
      ></Box>
    </Box>
  );
}
