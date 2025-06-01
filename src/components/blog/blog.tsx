import { Button } from "@/components/ui/button"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import pavelAvatar from "@/../public/about/Pavel.jpg"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Eintrag {
    title: string,
    description: string,
    image: string | StaticImageData,
    link: string,

}

const blogeintrag: Eintrag[] = [
    {
        title: "Eintrag 1",
        description: "Eintrag Nummer uno Eintrag Nummer uno Eintrag Nummer uno Eintrag Nummer uno Eintrag Nummer uno",
        image: pavelAvatar,
        link: "/pricing"
    },
    {
        title: "Eintrag 2",
        description: "Eintrag Nummer uno Eintrag Nummer uno Eintrag Nummer uno Eintrag Nummer uno Eintrag Nummer uno",
        image: pavelAvatar,
        link: "/pricing"
    },
    {
        title: "Eintrag 3",
        description: "Eintrag Nummer uno Eintrag Nummer uno Eintrag Nummer uno Eintrag Nummer uno Eintrag Nummer uno",
        image: pavelAvatar,
        link: "/pricing"
    },
]

export default function BlogEintrag() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">Insights & Ideas</h1>
                <p>Welcome to our blog <span className="text-sm text-muted-foreground">— your go-to space for fresh perspectives, practical tips,
                    and stories that inspire. From behind-the-scenes looks to industry trends, we’re here to
                    share knowledge and spark conversation.</span></p>
            </div>

            <div className="relative top-20 left-20 grid grid-cols-6 w-full gap-10">
                {blogeintrag.map((e, i) => (
                    <div key={`eintrag-image-${i}`} className="w-full h-full">
                        <Card className="w-full h-full flex flex-col text-center">
                            <CardHeader className="p-0 max-h-40">
                                <Image src={e.image} alt="Blog entry" className="w-full h-48 object-cover" />
                            </CardHeader>
                            <CardTitle>
                                <p className="text-3xl mt-4">{e.title}</p>
                            </CardTitle>
                            <CardDescription className="px-4">{e.description}</CardDescription>
                            <CardContent className="mt-auto pb-4">
                                <Link href={e.link}>
                                    <Button>Read More</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

        </section>
    )
}