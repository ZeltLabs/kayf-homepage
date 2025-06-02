"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { links } from "@/lib/navigation";
import Link from "next/link";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedLink } from "./ui/link";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mode toggle component
function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed z-50 w-full pt-4 px-4">
            {/* Floating container */}
            <div className="bg-secondary/80 backdrop-blur border rounded-lg shadow-md p-1 px-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" aria-label="Go home" className="flex items-center gap-2">
                    <Logo className="h-6 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {links.slice(1).map((link, index) => (
                        <AnimatedLink
                            key={`nav-link-${index}`}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.title}
                        </AnimatedLink>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-2 ml-4">
                    <ModeToggle />
                    <Button asChild>
                        <Link href="https://app.kayf.app">
                            Get Started <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Mobile Burger */}
                <div className="md:hidden ml-2">
                    <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Slide-In Menu */}
            <div
                className={cn(
                    "md:hidden transition-all overflow-hidden duration-300 px-4",
                    menuOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                )}
            >
                <div className="bg-secondary/90 backdrop-blur border rounded-lg shadow-md p-4 space-y-4">
                    {links.slice(1).map((link, index) => (
                        <AnimatedLink
                            key={`mobile-link-${index}`}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                            {link.title}
                        </AnimatedLink>
                    ))}
                    <ModeToggle />
                    <Button asChild className="w-full justify-between">
                        <Link href="https://app.kayf.app">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}

