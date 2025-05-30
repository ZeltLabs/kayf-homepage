import { Logo } from '@/components/logo'
import { links, socials } from '@/lib/navigation'
import Link from 'next/link'
import { AnimatedLink } from './ui/link'

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <Logo />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <AnimatedLink
                            key={`footer-link-${index}`}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </AnimatedLink>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {
                        socials.map((social, index) => (
                            <Link
                                key={`footer-social-${index}`}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-muted-foreground hover:text-primary block duration-150"
                            >
                                <social.icon />
                            </Link>

                        ))
                    }
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} ZeltLabs, All rights reserved</span>
            </div>
        </footer>
    )
}
