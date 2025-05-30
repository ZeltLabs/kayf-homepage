"use client"

import { Activity, Clock, DraftingCompass, Plug, Zap } from 'lucide-react'
import { OrbitingCircles } from '@/components/ui/magicui/orbiting-circles'
import {
    SiConfluence,
    SiDiscord,
    SiGithub,
    SiGmail,
    SiGooglecalendar,
    SiGoogledrive,
    SiNotion,
    SiOpenai,
    SiSlack,
    SiTelegram,
} from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/use-mobile'

export default function WorkflowsFeaturesSection() {
    const isMobile = useIsMobile();

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Workflow automation done right</h2>
                            <p className="mt-6 text-muted-foreground">
                                Powered by <Link href='https://github.com/ZeltLabs/zynk' target="_blank" className='font-bold'>Zynk</Link>, Kayf runs workflows in a high-performance execution environment that scales with your team. Define logic once and let Kayf handle the timing, execution, and integration - so things run exactly when and how they should.
                            </p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Plug className="size-5" />
                                Built-in integrations for every team
                            </li>
                            <li>
                                <Clock className="size-5" />
                                Scheduled & event-based triggers
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Real-time execution feedback
                            </li>
                            <li>
                                <DraftingCompass className="size-5" />
                                Visual workflows builder
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Analytics and logging
                            </li>
                        </ul>
                    </div>
                    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden lg:col-span-3">
                        <OrbitingCircles iconSize={40} radius={isMobile ? 130 : 160}>
                            <SiNotion />
                            <SiConfluence />
                            <SiSlack />
                            <SiGooglecalendar />
                            <SiOpenai />
                        </OrbitingCircles>
                        <OrbitingCircles iconSize={30} radius={isMobile ? 70 : 100} reverse speed={2}>
                            <SiGithub />
                            <SiTelegram />
                            <SiGmail />
                            <SiGoogledrive />
                            <SiDiscord />
                        </OrbitingCircles>
                    </div>
                </div>
            </div>
        </section>
    )
}

