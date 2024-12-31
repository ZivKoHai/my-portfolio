"use client";
import { useFormStatus } from "react-dom";
import {
  Box,
  FormControl,
  TextField,
  Container,
  Button,
  Alert,
} from "@mui/material";
import { sendMessage } from "@/actions/contact";
import { useActionState } from "react";

type State = {
  success: boolean;
  error: string | null;
};

export const initialState: State = {
  success: false,
  error: null,
};

export default function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, initialState);

  return (
    <Container maxWidth="sm">
      <Box
        action={formAction}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          my: 4,
        }}
      >
        {state?.error && <Alert severity="error">{state.error}</Alert>}
        {state?.success && (
          <Alert severity="success">Message sent successfully!</Alert>
        )}

        <FormControl fullWidth>
          <TextField
            required
            label="Name"
            variant="outlined"
            id="name"
            name="name"
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            required
            label="Email"
            variant="outlined"
            type="email"
            id="email"
            name="email"
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            required
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            id="message"
            name="message"
          />
        </FormControl>

        <SubmitButton />
      </Box>
    </Container>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button variant="contained" type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}
