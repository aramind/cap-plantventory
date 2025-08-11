import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { HomeIcon, LogIn, Sprout } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { stackServerApp } from "@/stack";

const Navbar = async () => {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  return (
    <nav className="sticky top-0 w-full border-b bg-background/96 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              🪴 Plantventory
            </Link>
            {/* Navbar components */}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/plants">
                <Sprout className="w-4 h-4" />
                <span className="hidden md:inline">Pant</span>
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                <span className="hidden md:inline">Home</span>
              </Link>
            </Button>
            <ModeToggle />
            {/* Signin button */}
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href={app.signIn}>
                <LogIn className="w-4 h-4" />
                <span className="hidden md:inline">Signin</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
