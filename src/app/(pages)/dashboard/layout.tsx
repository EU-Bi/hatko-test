import Navbar from "@/app/components/Navbar";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col bg-gray-100 w-full items-center">
      <Navbar />
      <article className="flex items-center max-w-7xl justify-center h-full flex-col my-4">{children}</article>
    </section>
  );
}

export default Layout;
