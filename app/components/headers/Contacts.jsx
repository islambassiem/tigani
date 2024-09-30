import { Container } from "@mui/material";
import React from "react";
import WhatsApp from "../icons/WhatsApp";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";
import Instagram from "../icons/Instagram";
import YouTube from "../icons/Youtube";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Link from "next/link";

const Contacts = () => {
  const iconSize = 15;
  return (
    <div className="bg-black text-white min-h-8 flex justify-between items-center">
      <Container className="flex justify-between items-center flex-col md:flex-row">
        <div className="flex justify-center gap-4 my-2">
          <div className="flex align-middle hover:text-teal-500 hover:cursor-pointer">
            <span className="">{"email@domain-name.education"}</span>
            <AlternateEmailIcon />
          </div>
          <div className="hover:text-teal-500 hover:cursor-pointer">
            {"05123456789"}
            <PhoneIphoneIcon />
          </div>
        </div>
        <div className="flex gap-4 my-2">
          <Link href={"#"} className="py-1 hover:text-teal-500">
            <WhatsApp size={iconSize} />
          </Link>
          <Link href={"#"} className="py-1 hover:text-teal-500">
            <Facebook size={iconSize} />
          </Link>
          <Link href={"#"} className="py-1 hover:text-teal-500">
            <Twitter size={iconSize} />
          </Link>
          <Link href={"#"} className="py-1 hover:text-teal-500">
            <LinkedIn size={iconSize} />
          </Link>
          <Link href={"#"} className="py-1 hover:text-teal-500">
            <Instagram size={iconSize} />
          </Link>
          <Link href={"#"} className="py-1 hover:text-teal-500">
            <YouTube size={iconSize} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
