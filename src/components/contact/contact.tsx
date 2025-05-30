import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Help us route your inquiry</h1>

                <div className="border rounded-lg">
                    <div className="grid divide-y border-b md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                        <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                            <div>
                                <h2 className="mb-3 text-lg font-semibold">Sales</h2>
                                <Link
                                    href="mailto:sales@kayf.app"
                                    className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                    sales@kayf.app
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">General</h3>
                                <Link
                                    href="mailto:contact@kayf.app"
                                    className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                    contact@kayf.app
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="h-3 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>

                    <form action="" className="border-t px-12 lg:px-24 py-12 lg:py-24">
                        <Card className="mx-auto w-full p-8 sm:p-16">
                            <h3 className="text-xl font-semibold">Let’s get you to the right place</h3>
                            <p className="mt-4 text-sm">Reach out to our team! We’re eager to learn more about how you plan to use Kayf.</p>

                            <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">

                                <div>
                                    <Label htmlFor="type" className="space-y-2">Type of Request</Label>
                                    <Select required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select request type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="support">Support</SelectItem>
                                            <SelectItem value="business">Business Inquiry</SelectItem>
                                            <SelectItem value="general">General Question</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="name" className="space-y-2">Full name</Label>
                                    <Input type="text" id="name" required />
                                </div>

                                <div>
                                    <Label htmlFor="email" className="space-y-2">Email address</Label>
                                    <Input type="email" id="email" required />
                                </div>

                                <div>
                                    <Label htmlFor="country" className="space-y-2">Country/Region</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Austria</SelectItem>
                                            <SelectItem value="2">United States</SelectItem>
                                            <SelectItem value="3">Germany</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="website" className="space-y-2">Company Website (optional)</Label>
                                    <Input type="url" id="website" />
                                </div>

                                <div>
                                    <Label htmlFor="job" className="space-y-2">Job function</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a job function" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Engineering</SelectItem>
                                            <SelectItem value="2">Education</SelectItem>
                                            <SelectItem value="3">Legal</SelectItem>
                                            <SelectItem value="4">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="msg" className="space-y-2">Message</Label>
                                    <Textarea id="msg" rows={3} />
                                </div>

                                <Button>Submit</Button>
                            </div>
                        </Card>
                    </form>
                </div>
            </div>
        </section>
    )
}
