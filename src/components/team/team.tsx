import Image, { StaticImageData } from "next/image"
import ankushAvatar from "@/../public/about/Ankush.jpg"
import alexAvatar from "@/../public/about/Alex.jpg"
import pavelAvatar from "@/../public/about/Pavel.jpg"
import gioiaAvatar from "@/../public/about/Gioia.jpg"
import tobiasAvatar from "@/../public/about/Tobias.jpg"
import { Heading1, Paragraph } from "@/components/ui/typography"
import teampic from "@/../public/about/Team.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { JSX } from "react"
import { DialogTitle } from "@radix-ui/react-dialog"

interface TeamProps {
    name: string;
    position: string;
    email: string;
    description: string | JSX.Element;
    imageUrl: StaticImageData;
}

const teamList: TeamProps[] = [
    {
        name: "Tobias Fischinger",
        position: "Scalability & Infrastructure Managment",
        email: "tfischinger@student.tgm.ac.at",
        description: "Tobias is the old wise man of the team, specializing in scalability and serving up a constant stream of dad jokes. He's proof that wisdom and humor scale perfectly together.",
        imageUrl: tobiasAvatar,
    },
    {
        name: "Pavel Bakshi",
        position: "Frontend Developer",
        email: "pbakshi@student.tgm.ac.at",
        description: "Pavel is the frontend whiz who's as fast as he is creative. A frontend genius who knows his stuff, his expertise isn't limited to web - he's also skilled in data and machine learning.",
        imageUrl: pavelAvatar,
    },
    {
        name: "Ankush Ahuja",
        position: "Project Leader & Tracer Developer",
        email: "contact@ahuja.app",
        description: <>
            Ankush, the team leader, keeps everyone on track and also works on Tracer. With sharp smarts, unbeatable charm, and a knack for solving tough challenges, he&apos;s the captain every crew dreams of.
            <br />
            <Link href={"https://ahuja.app"} className="underline">Ankush&apos;s Homepage</Link>
        </>,
        imageUrl: ankushAvatar,
    },
    {
        name: "Gioia Frolik",
        position: "Workflows & Automation Dev",
        email: "gfrolik@student.tgm.ac.at",
        description: "Gioia is the mastermind behind workflows, automation, and documentation. From managing social media to being the go-to expert on the diploma thesis, she's the team’s all-knowing multitasking ace.",
        imageUrl: gioiaAvatar,
    },
    {
        name: "Alexander Awart",
        position: "DB & Security Managment",
        email: "aawart@student.tgm.ac.at",
        description: "Alex is our security guru and database wizard. Incredibly hardworking and always on top of his game, he's the guy who keeps everything safe and running smoothly.",
        imageUrl: alexAvatar,
    },
];

const TeamCards = ({ members: member }: { members: TeamProps }) => (
    <Card className="mt-8">
        <CardHeader className="flex justify-center items-center pb-0">
            <Avatar className="size-[100px]">
                <Image src={member.imageUrl} alt={member.name} />
                <AvatarFallback>{member.name}</AvatarFallback>
            </Avatar>
            <CardDescription className="flex flex-col items-center">
                <span className="text-foreground text-3xl font-semibold">{member.name}</span>
                {member.position}
            </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center p-6 py-3">
            <TeamMemberDialog member={member} />
        </CardContent>
        <CardFooter className="flex justify-center">
            <CardDescription>
                <Link href={`mailto:${member.email}`} className="underline">
                    {member.email}
                </Link>
            </CardDescription>
        </CardFooter>
    </Card>
);

function TeamMemberDialog({ member }: { member: TeamProps }) {
    return (
        <Dialog>
            <DialogTrigger className={buttonVariants({ variant: 'default' })}>
                Read more
            </DialogTrigger>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <DialogHeader className="flex justify-self-center">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={member.imageUrl.src} alt={member.name} />
                        <AvatarFallback>{member.name}</AvatarFallback>
                    </Avatar>
                </DialogHeader>
                <div className="flex flex-col space-y-2 justify-center text-center">
                    <p className="text-4xl">{member.name}</p>
                    <DialogDescription>{member.position}</DialogDescription>
                    <p>
                        {member.description}
                    </p>
                    <p className="text-center">
                        Email: <Link className="underline" href={`mailto:${member.email}`}>{member.email}</Link>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default function About() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">
                        <u>Building</u> tomorrow,<br /> not reacting to it.
                    </h1>
                    <Paragraph className="leading-relaxed text-center">
                        Our small but mighty team consists of students from the Technologisches Gewerbemuseum in Vienna, specializing in information technology. We have experts in data science, IT security, and media technologies, giving us a wide range of abilities. This variety allows us to tackle a broad range of challenges and develop innovative solutions. Together, we are committed to creating impactful technology that meets the needs of our users.
                    </Paragraph>
                    <div className="relative hidden lg:block w-full py-6">
                        <Image src={teampic} alt="logo" className="w-full rounded-2xl drop-shadow-lg" />
                        <div className="absolute top-20 left-30 w-full h-full">
                            <div className="flex flex-row w-9/12 h-full">
                                {
                                    teamList.map((e, i) => {
                                        return (
                                            <div className="relative w-1/5 h-full" key={`team-photo-member-${i}`}>
                                                <HoverCard>
                                                    <HoverCardTrigger asChild>
                                                        <div className="w-[90%] h-3/5 cursor-pointer"></div>
                                                    </HoverCardTrigger>
                                                    <HoverCardContent>
                                                        <div className="flex flex-col space-y-2 justify-center text-center">
                                                            <h1 className="text-xl">{e.name}</h1>
                                                            <h2 className="text-sm">{e.position}</h2>
                                                            <TeamMemberDialog member={e} />
                                                        </div>
                                                    </HoverCardContent>
                                                </HoverCard>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    <div className="lg:hidden">
                        {teamList.map((e, index) => (
                            <TeamCards key={`team-member-mobile-${index}`} members={e}></TeamCards>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
