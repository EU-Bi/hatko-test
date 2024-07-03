import Navbar from "@/app/components/Navbar";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 w-full">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
