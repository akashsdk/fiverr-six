import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
}
