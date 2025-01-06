"use client";

import Link from "next/link";
import {
  Menu,
  Home,
  Search,
  Library,
  Download,
  LogIn,
  UserPlus,
  HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

export default function Navbar() {
  return (
    <nav className="sticky w-full bg-background border-t md:top-0 md:border-b md:border-t-0 h-16 z-50">
      <div className="max-w-screen-xl mx-auto px-4 h-full">
        <div className="flex justify-around items-center h-full">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-fuchsia-400 transition-colors hover:underline"
          >
            <HomeIcon className="h-5 w-5" />
            <span className="hidden md:block">Home</span>
          </Link>

          <Link
            href="/search"
            className="flex items-center gap-2 hover:text-fuchsia-400 transition-colors hover:underline"
          >
            <Search className="h-5 w-5" />
            <span className="hidden md:block">Search</span>
          </Link>

          <Link
            href="/library"
            className="flex items-center gap-2 hover:text-fuchsia-400 transition-colors hover:underline"
          >
            <Library className="h-5 w-5" />
            <span className="hidden md:block">Library</span>
          </Link>

          <Link
            href="/downloads"
            className="flex items-center gap-2 hover:text-fuchsia-400 transition-colors hover:underline"
          >
            <Download className="h-5 w-5" />
            <span className="hidden md:block">Downloads</span>
          </Link>
        </div>
      </div>
      <Separator />
    </nav>
  );
}
