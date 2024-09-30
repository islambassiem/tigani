import { Container } from "@mui/material";
import React from "react";
import Logo from "../icons/Logo";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
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
        <div className="md:hidden mt-7" dir="rtl">
          <MenuIcon />
        </div>
        <div className="hidden md:flex justify-between items-center w-8/12 ">
          {/* <CloseIcon /> */}
          <Link href={"#"} className="hover:text-teal-500 text-2xl">
            الرئيسية
          </Link>
          <Link href={"#"} className="hover:text-teal-500 text-2xl">
            الجامعات
          </Link>
          <Link href={"#"} className="hover:text-teal-500 text-2xl">
            من نحن
          </Link>
          <Link href={"#"} className="hover:text-teal-500 text-2xl">
            اتصل بنا
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
