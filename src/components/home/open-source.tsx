import Link from 'next/link'
import { AnimatedLink } from '../ui/link'

function FilledHeartIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            {...props}
        >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
            4.42 3 7.5 3c1.74 0 3.41 0.81 
            4.5 2.09C13.09 3.81 14.76 3 
            16.5 3 19.58 3 22 5.42 22 
            8.5c0 3.78-3.4 6.86-8.55 
            11.54L12 21.35z" />
        </svg>
    )
}

export default function OpenSourceSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl grid flex-col-reverse items-center gap-12 px-6 md:grid-cols-2 lg:gap-24">
                {/* Text Block */}
                <div className="space-y-6 md:space-y-8">
                    <h2 className="text-4xl font-medium lg:text-5xl">
                        Built by the community for the community
                    </h2>
                    <p className="text-muted-foreground">
                        Kayf is a <Link href={'https://zeltlabs.com'} className="font-semibold text-accent-foreground">ZeltLabs</Link> project, proudly released under the <Link href={'https://github.com/ZeltLabs/kayf/blob/main/LICENSE'} className="font-semibold">MIT license</Link>. This platform is built for the community and will always remain free.
                    </p>
                    <p className="text-muted-foreground">
                        Our mission is to simplify data management and make powerful, intelligent tools accessible to everyone. As an open-source solution, Kayf encourages anyone to use, modify, and improve the software - together.
                    </p>
                </div>
                {/* Filled Animated Heart */}
                <div className="flex items-center justify-center">
                    <FilledHeartIcon className="h-24 w-24 animate-pulse text-red-400 sm:h-70 sm:w-70" />
                </div>
            </div>
        </section>
    )
}

