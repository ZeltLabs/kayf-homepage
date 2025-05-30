import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'
import { OrbitingCircles } from '@/components/ui/magicui/orbiting-circles'
import { SiConfluence, SiDiscord, SiGithub, SiGmail, SiGooglecalendar, SiGoogledrive, SiNotion, SiOpenai, SiSlack, SiTelegram } from '@icons-pack/react-simple-icons'

export default function WorkflowsFeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Built for Scaling teams</h2>
                            <p className="mt-6">Orrupti aut temporibus assumenda atque ab, accusamus sit, molestiae veniam laboriosam pariatur.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Mail className="size-5" />
                                Email and web support
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Fast response time
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Menitoring and analytics
                            </li>
                            <li>
                                <DraftingCompass className="size-5" />
                                Architectural review
                            </li>
                        </ul>
                    </div>
                    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden lg:col-span-3">
                        <OrbitingCircles iconSize={40}>
                            <SiNotion />
                            <SiConfluence />
                            <SiSlack />
                            <SiGooglecalendar />
                            <SiOpenai />
                        </OrbitingCircles>
                        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
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
