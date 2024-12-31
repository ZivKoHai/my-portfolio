"use client";

import { useState } from "react";
import { ChatMessage } from "@/app/actions/chat";
import { Box, Button, TextField, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import ChatFeed from "./ui/chat-feed";

export default function AiChat() {
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const userMessage: ChatMessage = { role: "user", content: input };
    const updatedHistory = [...chatHistory, userMessage];
    setChatHistory(updatedHistory);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedHistory }),
      });

      const data = await res.json();

      if (data.error) {
        if (data.error.includes("exceeded your current quota")) {
          setError(
            "Sorry, the AI service is temporarily unavailable. Please try again later."
          );
        } else {
          setError(`Error: ${data.error}`);
        }
      } else {
        const assistantMessage: ChatMessage = {
          role: "assistant",
          content: data.message,
        };
        setChatHistory([...updatedHistory, assistantMessage]);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("The Ai is temporarily unavailable. Please try again later.");
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          width: "20%",
        }}
      >
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            height: 50,
            width: 50,
            borderRadius: "50%",
          }}
        >
          <ChatIcon />
        </Button>
        {chatOpen && (
          <Box
            maxWidth="2xl"
            mx="auto"
            p={4}
            sx={{
              borderRadius: 2,
              position: "fixed",
              bottom: 80,
              right: 20,
              backgroundColor: "background.paper",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxHeight: "500px",
              width: { xs: "90%", sm: "400px" },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mb: 2,
              }}
            >
              {chatHistory.map((message, index) => (
                <ChatFeed
                  key={index}
                  role={message.role}
                  content={message.content}
                />
              ))}
            </Box>
            {isLoading && <Box className="loader"></Box>}
            <Box>{error && <Typography color="error">{error}</Typography>}</Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: "auto",
                backgroundColor: "background.paper",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something..."
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40,
                    },
                  }}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  variant="contained"
                  color="primary"
                  sx={{
                    height: 40,
                    minWidth: 80,
                    "&.Mui-disabled": {
                      backgroundColor: "grey.400",
                    },
                  }}
                >
                  {isLoading ? "Sending..." : "Send"}
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
