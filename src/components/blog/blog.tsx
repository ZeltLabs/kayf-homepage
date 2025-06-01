import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import pavelAvatar from "@/../public/about/Pavel.jpg"

interface BlogEntry {
    title: string
    description: string
    image: string | StaticImageData
    link: string
    date: Date
}

const blogEntries: BlogEntry[] = [
    {
        title: "The Future of Web Development",
        description:
            "Exploring the latest trends in frontend and backend technologies, including AI-powered coding tools and modern frameworks.",
        image: pavelAvatar,
        link: "/post/1",
        date: new Date("2024-12-03"),
    },
    {
        title: "Mastering React Performance Optimization",
        description:
            "A deep dive into memoization, lazy loading, and efficient state management techniques for faster React applications.",
        image: pavelAvatar,
        link: "/post/2",
        date: new Date("2024-12-05"),
    },
    {
        title: "UI/UX Design Principles for 2025",
        description:
            "Key strategies for creating intuitive, beautiful interfaces that delight users and drive engagement in the coming year.",
        image: pavelAvatar,
        link: "/post/3",
        date: new Date("2024-12-10"),
    },
]

export default function BlogSection() {
    return (
        <section className="py-32 px-4 sm:px-6 lg:px-20">
            {/* Heading and intro */}
            <div className="max-w-5xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-start">
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

            {/* Blog entries */}
            <div className="max-w-5xl mx-auto space-y-12">
                {blogEntries.map((entry, i) => (
                    <div key={`blog-entry-${i}`} className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                            <div className="flex-shrink-0 w-full sm:w-48 h-48 rounded-lg overflow-hidden">
                                <Image
                                    src={entry.image}
                                    alt={`Image for ${entry.title}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="space-y-2">
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
                        <Separator />
                    </div>
                ))}
            </div>
        </section>
    )
}

