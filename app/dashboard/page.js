import React from "react";
import Link from "next/link";
const Dashboard = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/gallery">Gallery</Link>
    </div>
  );
};

export default Dashboard;
