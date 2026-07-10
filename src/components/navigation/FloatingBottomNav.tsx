"use client";

import Link from "next/link";
import { Home, Search, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const items = [
    {
        href: "/",
        label: "Home",
        icon: Home,
    },
    {
        href: "/quran",
        label: "Quran",
        icon: BookOpen,
    },
    // {
    //     href: "/search",
    //     label: "Search",
    //     icon: Search,
    // },
];

export default function FloatingBottomNav() {
    const pathname = usePathname();

    const [compact, setCompact] = useState(false);

    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const current = window.scrollY;

            if (current > lastScroll && current > 80) {
                setCompact(true);
            } else if (current < lastScroll) {
                setCompact(false);
            }

            lastScroll = current;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    return (
        <nav
            style={{
                bottom:
                    "calc(env(safe-area-inset-bottom, 0px) + 20px)",
            }}
            className={`
fixed
left-1/2
z-[999]
-translate-x-1/2

md:hidden

rounded-full

border
border-border/70

bg-background/85

backdrop-blur-xl

shadow-xl

transition-all
duration-300
ease-out

${compact
                    ? "px-5 py-3"
                    : "px-7 py-4"
                }
`}
        >
            <div className="flex h-full items-center justify-center gap-8">
                {items.map((item) => {
                    const Icon = item.icon;

                    const active =
                        pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group"
                        >
                            <div
                                className={`
flex
items-center

${compact
                                        ? "gap-0"
                                        : "gap-2"
                                    }

transition-all
duration-300
active:scale-95
`}
                            >
                                <Icon
                                    className={`
h-5
w-5
transition-all
duration-300

${active
                                            ? "text-emerald-600 scale-110"
                                            : "text-muted-foreground"
                                        }
`}
                                />

                                <span
                                    className={`
overflow-hidden
whitespace-nowrap
transition-all
duration-300

${compact
                                            ? "max-w-0 opacity-0"
                                            : "max-w-24 opacity-100"
                                        }

${active
                                            ? "text-emerald-600"
                                            : "text-muted-foreground"
                                        }
`}
                                >
                                    {item.label}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}