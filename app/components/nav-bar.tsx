"use client";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import ColorSchemeToggleBtn from "./color-scheme-toggle-btn";
import Logo from "./logo";

const pages = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <Link href={page.href} style={{ width: "100%" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ColorSchemeToggleBtn />
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" className="fade-in-bottom">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href="/">
              <Logo />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Link href="/">
              <Typography variant="h6" noWrap>
                <Logo />
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Link key={page.name} href={page.href}>
                <Button sx={{ color: "white", display: "block", mx: 1 }}>
                  {page.name}
                </Button>
              </Link>
            ))}
            <ColorSchemeToggleBtn />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
