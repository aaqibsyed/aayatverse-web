"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, ScrollText, Clock3, HandHeart, CalendarDays, Coins } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const links = [
    {
        href: "/quran",
        label: "Quran",
        icon: BookOpen,
    },
    {
        href: "/hadith",
        label: "Hadith",
        icon: ScrollText,
    },
    {
        href: "/prayer-times",
        label: "Prayer Times",
        icon: Clock3,
    },
    {
        href: "/duas",
        label: "Duas",
        icon: HandHeart,
    },
    {
        href: "/calendar",
        label: "Calendar",
        icon: CalendarDays,
    },
    {
        href: "/zakat",
        label: "Zakat",
        icon: Coins,
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <Link href="/" className="text-2xl font-bold tracking-tight">
                        Aayat
                        <span className="text-emerald-600">Verse</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-6 md:flex">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium transition-colors hover:text-emerald-600"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <ThemeToggle />
                    </nav>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open menu"
                            className="rounded-xl border p-2 transition-all hover:scale-105"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Fullscreen Menu */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[9999] bg-background">
                    <div className="flex h-16 items-center justify-between border-b px-6">
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tight"
                            onClick={() => setMobileOpen(false)}
                        >
                            Aayat
                            <span className="text-emerald-600">Verse</span>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(false)}
                            aria-label="Close menu"
                            className="rounded-xl border p-2"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <nav className="flex flex-col px-6 py-8">
                        {links.map((link) => {
                            const Icon = link.icon;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-4 rounded-xl px-4 py-4 text-lg font-medium transition-colors hover:bg-muted"
                                >
                                    <Icon className="h-5 w-5 text-emerald-600" />
                                    {link.label}
                                </Link>
                            );
                        })}

                        <div className="mt-8 border-t pt-6">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Theme
                                </span>

                                <ThemeToggle />
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}