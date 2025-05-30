import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

const freeFeatures = [
    'Real-time collaboration',
    'Block-based document editor',
    'Version history with snapshots',
    'Self-hosted with full feature access',
    'Unlimited local documents',
]

const proFeatures = [
    'Everything in Free tier',
    'Hosted infrastructure',
    'Unlimited file uploads',
    'Team management & permissions',
    'Daily backups',
    'Secure by design - end-to-end encryption',
]

const enterpriseFeatures = [
    'Everything in Pro tier',
    'Custom SLAs & onboarding',
    'Dedicated support',
    'Priority roadmap access',
]

export default function PricingSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Flexible plans for every team</h1>
                    <p>
                        Host Kayf yourself or get started instantly with our managed infrastructure.
                        <br />
                        <span className="text-sm text-muted-foreground">
                            <Link
                                href="https://github.com/ZeltLabs/zynk"
                                target="_blank"
                                className="font-semibold underline underline-offset-2"
                            >
                                Zynk
                            </Link> and <Link
                                href="https://github.com/ZeltLabs/tracer"
                                target="_blank"
                                className="font-semibold underline underline-offset-2"
                            >
                                Tracer
                            </Link> are separate services and not included in any hosting plan.
                        </span>
                    </p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-medium">Self-Hosted</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Free</span>
                            <CardDescription className="text-sm">Fully open-source</CardDescription>
                            <Button asChild variant="outline" className="mt-4 w-full">
                                <Link href="https://github.com/ZeltLabs/kayf" target="_blank" rel="noreferrer">Deploy yourself</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {freeFeatures.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="relative">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                            Popular
                        </span>

                        <CardHeader>
                            <CardTitle className="font-medium">Pro</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">€10 / mo</span>
                            <CardDescription className="text-sm">Managed hosting</CardDescription>
                            <Button asChild className="mt-4 w-full">
                                <Link href="/signup">Start Hosted</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {proFeatures.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Enterprise</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Contact us</span>
                            <CardDescription className="text-sm">Tailored for large orgs</CardDescription>
                            <Button asChild variant="outline" className="mt-4 w-full">
                                <Link href="/contact">Get in touch</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {enterpriseFeatures.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

