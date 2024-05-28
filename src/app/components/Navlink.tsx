"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavlinkProps = {
  href: string;
  text: string | React.ReactNode;
  activeClasses?: string;
  className?: string;
};

const Navlink: React.FC<NavlinkProps> = ({
  href,
  text,
  activeClasses,
  className = "",
}) => {
  const path = usePathname();
  const isActive = path === href;

  const combinedClasses = `${
    isActive && activeClasses ? activeClasses + " " : ""
  }${className}`.trim();

  return (
    <Link href={href} className={combinedClasses}>
      {text}
    </Link>
  );
};

export default Navlink;
