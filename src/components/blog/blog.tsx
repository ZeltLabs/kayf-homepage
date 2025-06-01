"use client"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import tgmLogo from "@/../public/blog/tgm.png"
import dagImg from "@/../public/blog/dag.png"
import { useState } from "react"
import { Input } from "@/components/ui/input"

interface BlogEntry {
    title: string
    description: string
    image: string | StaticImageData
    link: string
    date: Date
}


const blogEntries: BlogEntry[] = [
    {
        title: "Viewing Process Automation as a Simple Graph Problem",
        description: "Demonstrates how automation problems can be simplified and solved by modeling them as Directed Acyclic Graphs, allowing clear validation and execution order analysis.",
        image: dagImg,
        link: "/blog/tutorial-dag-graphs",
        date: new Date("2025-06-02"),
    }, {
        title: "Report June 2025",
        description: "Final project progress report for the diploma thesis, including details about the 'Jugend Innovativ' finals.",
        image: tgmLogo,
        link: "/blog/report-202506",
        date: new Date("2025-06-02"),
    },
    {
        title: "Report May 2025",
        description: "Report project progress for diploma thesis for May",
        image: tgmLogo,
        link: "/blog/report-202505",
        date: new Date("2025-06-02"),
    },
    {
        title: "Report April 2025",
        description: "Report project progress for diploma thesis for April",
        image: tgmLogo,
        link: "/blog/report-202504",
        date: new Date("2025-05-04"),
    },
    {
        title: "Report March 2025",
        description: "Report project progress for diploma thesis for March",
        image: tgmLogo,
        link: "/blog/report-202503",
        date: new Date("2025-04-08"),
    },
    {
        title: "Report February 2025",
        description: "Report project progress for diploma thesis for February",
        image: tgmLogo,
        link: "/blog/report-202502",
        date: new Date("2025-03-09"),
    },
    {
        title: "Report January 2025",
        description: "Report project progress for diploma thesis for January",
        image: tgmLogo,
        link: "/blog/report-202501",
        date: new Date("2025-02-06"),
    },
    {
        title: "Report December 2024",
        description: "Report project progress for diploma thesis for December",
        image: tgmLogo,
        link: "/blog/report-202412",
        date: new Date("2025-01-05"),
    },
    {
        title: "Report November 2024",
        description: "Report project progress for diploma thesis for November",
        image: tgmLogo,
        link: "/blog/report-202411",
        date: new Date("2024-12-05"),
    },
    {
        title: "Report October 2024",
        description: "Report project progress for diploma thesis for October",
        image: tgmLogo,
        link: "/blog/report-202410",
        date: new Date("2024-11-03"),
    },
];

export default function BlogSection() {
    const [search, setSearch] = useState("")

    const filteredEntries = blogEntries.filter(entry =>
        entry.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="py-32 px-4 sm:px-6 lg:px-20">
            {/* Heading and intro */}
            <div className="max-w-5xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-start">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Discover Our <br className="sm:hidden" /> Fresh Content
                    </h2>
                </div>
                <div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                        We regularly share insights into our product development, technical deep dives, and feature
                        roadmaps. Stay updated with the ideas shaping our platform’s future.
                    </p>
                </div>
            </div>

            {/* Search bar */}
            <div className="max-w-5xl mx-auto mb-12">
                <Input
                    placeholder="Search blog titles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full sm:w-1/2"
                />
            </div>

            {/* Blog entries */}
            <div className="max-w-5xl mx-auto space-y-6">
                {filteredEntries.map((entry, i) => (
                    <div key={`blog-entry-${i}`} className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-shrink-0 w-full sm:w-48 h-48 rounded-lg border overflow-hidden">
                                <Image
                                    src={entry.image}
                                    alt={`Image for ${entry.title}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold">{entry.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {entry.date.toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{entry.description}</p>
                                </div>
                                <div className="mt-4 self-end">
                                    <Button asChild>
                                        <Link href={entry.link} className="inline-flex items-center gap-1 text-sm font-medium">
                                            Read <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {
                            i < filteredEntries.length - 1 ?
                                <Separator />
                                : null
                        }
                    </div>
                ))}

                {filteredEntries.length === 0 && (
                    <p className="text-center text-muted-foreground">No results found.</p>
                )}
            </div>
        </section>
    )
}

