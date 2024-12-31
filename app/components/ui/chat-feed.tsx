import { Box } from "@mui/material";

interface ChatFeedProps {
  role: string;
  content: string;
}

export default function ChatFeed({ role, content }: ChatFeedProps) {
  if (role === "user") {
    return (
      <Box
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
          p: 2,
          borderRadius: 2,
          maxWidth: "80%",
          alignSelf: "flex-end",
          position: "relative",
        }}
      >
        {content}
      </Box>
    );
  }

  if (role === "assistant") {
    return (
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          p: 2,
          borderRadius: 2,
          maxWidth: "80%",
          position: "relative",
        }}
      >
        {content}
      </Box>
    );
  }
}
