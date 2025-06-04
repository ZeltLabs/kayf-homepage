import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import handy from "@/../public/download/handy.png"
import laptop from "@/../public/download/laptop.png"
import docker from "@/../public/download/docker.png"
import Image from "next/image";

export default function DownloadSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl px-4 lg:px-0 space-y-24">
                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold lg:text-6xl tracking-tight">
                        Download the Kayf app for a better experience
                    </h1>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Make the switch from web to app - with offline support, native notifications, and seamless performance across nearly every platform. Kayf keeps you in control, wherever you are.
                    </p>
                </div>

                {/* SECTION 1: Desktop */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 space-y-4 text-center lg:text-left">
                        <h3 className="text-3xl font-semibold">For Desktop</h3>
                        <p className="text-muted-foreground text-lg">
                            Run Kayf on your desktop to unify semantic search, workflow control, and secure collaboration in a single interface.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild>
                                <Link href="#">Download for Windows</Link>
                            </Button>
                            <Button asChild>
                                <Link href="#">Download for Linux</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <Image
                            src={laptop}
                            width={600}
                            alt="Picture of the author"
                        />
                    </div>
                </div>

                {/* SECTION 2: Mobile */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    <div className="flex-1 w-full">
                        <Image
                            src={handy}
                            width={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex-1 space-y-4 text-center lg:text-left">
                        <h3 className="text-3xl font-semibold">For Mobile</h3>
                        <p className="text-muted-foreground text-lg">
                            Stay productive wherever you are - with offline access to your notes and seamless collaboration from your phone.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild>
                                <Link href="#">Download for iOS</Link>
                            </Button>
                            <Button asChild>
                                <Link href="#">Download for Android</Link>
                            </Button>
                        </div>
                    </div>
                </div>


                {/* SECTION 3: Docker */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 space-y-4 text-center lg:text-left">
                        <h3 className="text-3xl font-semibold">Docker Installation</h3>
                        <p className="text-muted-foreground text-lg">
                            Prefer containers? Kayf runs as two modular services: the frontend (the editor UI) and a backend for enabling secure multi-user collaboration and data synchronization.
                            Use our prebuilt Docker images to self-host the full experience.
                        </p>

                        <div className="space-y-6 mt-6">
                            <div>
                                <p className="font-medium mb-2">Frontend (Editor UI)</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button asChild>
                                        <Link href="#">Docker Hub - Frontend</Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href="#">GitHub Container Registry - Frontend</Link>
                                    </Button>
                                </div>
                            </div>

                            <div>
                                <p className="font-medium mb-2">Backend (Collaboration Server)</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button asChild>
                                        <Link href="#">Docker Hub - Backend</Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href="#">GitHub Container Registry - Backend</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <Image
                            src={docker}
                            width={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
            <Separator className="my-24" />
            <div>
                {/* ALERT */}
                <div className="mx-auto max-w-4xl px-4">
                    <Alert variant="default" className="rounded-xl">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertTitle className="font-bold text-md">Important Note About Kayf</AlertTitle>
                        <AlertDescription className="space-y-4">
                            <p>
                                Kayf refers only to the editor and user interface of the platform.
                                The core technologies powering automation and search – <strong>Zynk</strong> (workflow runner)
                                and <strong>Tracer</strong> (enterprise search) – <strong>must be installed separately</strong>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild variant="outline">
                                    <Link href="https://github.com/ZeltLabs/tracer">View Tracer Repository</Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href="https://github.com/ZeltLabs/zynk">View Zynk Repository</Link>
                                </Button>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Please refer to these repositories for further installation options.
                            </p>
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
        </section>
    );
}

