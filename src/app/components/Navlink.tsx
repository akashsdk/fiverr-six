"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavlinkProps = {
  href: string;
  text: string | React.ReactNode;
  activeClasses?: string;
  className?: string; // Making className optional
};

const Navlink: React.FC<NavlinkProps> = ({ href, text, activeClasses, className = "" }) => {
  const path = usePathname();
  const isActive = path === href;

  // Ensure there's a space between classes only if both are provided
  const combinedClasses = `${isActive && activeClasses ? activeClasses + " " : ""}${className}`.trim();

  return (
    <Link href={href} className={combinedClasses}>
      {text}
    </Link>
  );
};

export default Navlink;
