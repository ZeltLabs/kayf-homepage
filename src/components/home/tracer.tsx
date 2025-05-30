'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Brain, FileText, LayoutGrid, Search } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/ui/magicui/border-beam'
import Link from 'next/link'

export default function TracerFeaturesSection() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const displayImage = {
        image: '/tracer-demo.png',
        alt: 'Kayf Tracer integration demo',
    }

    return (
        <section className="py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-6xl">Enterprise Search. Reimagined.</h2>
                    <p className="text-muted-foreground">
                        Kayf uses <Link className='font-bold' href='https://github.com/ZeltLabs/tracer' target="_blank">Tracer</Link> to provide fast and cost-effective enterprise search. Seamlessly integrated into the platform, Tracer powers full-text queries, semantic understanding, and natural language Q&A across all your content.
                    </p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Search className="size-4" />
                                    Powerful search engine
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Tracer delivers relevant results across structured and unstructured content. Built with performance in mind, it handles everything from plain text to nested document formats.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <FileText className="size-4" />
                                    Deep document understanding
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Go beyond titles and filenames - Tracer extracts and analyzes the full context of your documents for more accurate results.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Brain className="size-4" />
                                    LLM-ready questions
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Ask natural language questions across your indexed data. Tracer integrates with leading LLMs for seamless, meaningful answers.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <LayoutGrid className="size-4" />
                                    Scalable & efficient
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Designed for scale, Tracer performs reliably even across large datasets-without requiring heavyweight infrastructure.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                                    <Image
                                        src={displayImage.image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={displayImage.alt}
                                        width={1207}
                                        height={929}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

