import React from "react";
import { UserNav } from "@/components/user-nav";
import { NavMain } from "@/components/NavMain";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ModeToggle } from "./modetoggle";
import { NavSm } from "@/components/NavSm";

const Navbar = () => {
  return (
    <main className="">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center flex-row space-x-2">
            <Avatar>
              <AvatarImage src="logo.svg" alt="Blingo" />
              <AvatarFallback>BL</AvatarFallback>
            </Avatar>
            <p className="font-bold">Blingo</p>
          </div>
          <NavMain />
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <UserNav />
            <div className="md:hidden block">
              <NavSm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
