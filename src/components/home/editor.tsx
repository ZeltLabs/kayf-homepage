import { Button } from '@/components/ui/button'
import { ChevronRight, FileText, PenLine, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import editorDark from '@/../public/home/editor-card-dark.png'
import editorLight from '@/../public/home/editor-card-light.png'


export default function EditorFeaturesSection() {
    return (
        <section className="py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <h2 className="text-foreground text-balance text-4xl font-semibold">The collaborative editor built for speed and clarity</h2>
                        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                            Powered by Yjs, Kayf enables app-wide, real-time collaboration across all content types. Whether you&apos;re editing a doc, writing code, or working on a shared canvas - everything stays perfectly in sync. Our model supports persistent snapshots for every file, giving you full version history without friction.
                        </p>
                        <Button
                            className="mt-8 pr-2"
                            variant="outline"
                            asChild>
                            <Link href="#">
                                Learn more
                                <ChevronRight className="size-4 opacity-50" />
                            </Link>
                        </Button>
                    </div>

                    <div className="space-y-6 md:col-span-3 md:space-y-10">
                        <div>
                            <div className="flex items-center gap-2">
                                <FileText className="size-5" />
                                <h3 className="text-foreground text-lg font-semibold">Work on documents or code</h3>
                            </div>
                            <p className="text-muted-foreground mt-3 text-balance">Write in a rich-text editor powered by Lexical or dive into code with full syntax highlighting via CodeMirror. Everything stays in sync, no matter the format.</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <PenLine className="size-5" />
                                <h3 className="text-foreground text-lg font-semibold">Shared Canvas</h3>
                            </div>
                            <p className="text-muted-foreground mt-3 text-balance">Sketch out ideas, organize structures, or plan workflows visually. The shared canvas gives teams a space to think together in real time.</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="size-5" />
                                <h3 className="text-foreground text-lg font-semibold">AI-powered Collaboration</h3>
                            </div>
                            <p className="text-muted-foreground mt-3 text-balance">Use natural language to direct your AI assistant. Summarize, refactor, or generate content directly in your workspace.</p>
                        </div>
                    </div>
                </div>

                <div className="relative mt-16 px-12">
                    <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10 hidden dark:block">
                        <Image
                            src={editorDark}
                            alt="Kayf editor screen"
                            width={2880}
                        />
                    </div>
                    <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10 block dark:hidden">
                        <Image
                            src={editorLight}
                            alt="Kayf editor screen"
                            width={2880}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

