"use client";

import { Container, Typography } from "@mui/material";
import { useState } from "react";
import Logo from "../icons/Logo";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Drawer
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pages = [
    {
      id: 1,
      text: "الرئيسية",
      link: "#",
    },
    {
      id: 2,
      text: "الجامعات",
      link: "#",
    },
    {
      id: 3,
      text: "من نحن",
      link: "#",
    },
    {
      id: 4,
      text: "اتصل بنا",
      link: "#",
    },
  ];

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((page) => (
          <ListItem key={page.id} disablePadding>
            <ListItemButton className="my-2 shadow-teal-100 shadow-md">
              <Link href={page.link} className="text-2xl hover:text-teal-500 hover:scale-125">
                <Typography variant="h6">{page.text}</Typography>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="bg-white h-24 flex justify-between items-center">
      <Container className="flex justify-between">
        <div className="flex items-center">
          <Link href={"#"}>
            <div className="flex flex-col items-center">
              <Logo />
              <div className="text-2xl hover:text-teal-500">
                مركز دليل التميز للتعليم
              </div>
            </div>
          </Link>
        </div>
        <div className="md:hidden mt-7">
          <button onClick={toggleDrawer(true)}>
            <MenuIcon />
          </button>
        </div>
        <div className="hidden md:flex justify-between items-center w-8/12 ">
          {pages.map((page) => {
            return (
              <Link
                key={page.id}
                href={page.link}
                className="text-2xl hover:text-teal-500 hover:scale-125"
              >
                {page.text}
              </Link>
            );
          })}
        </div>
      </Container>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default NavBar;
