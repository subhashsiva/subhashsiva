import React from "react";
import { MainNav } from "./main-nav";

export const Header = () => {
  return (
    <div className="w-screen p-5 bg-accent-foreground sticky top-0 z-50 overflow-hidden">
      <MainNav />
    </div>
  );
};
