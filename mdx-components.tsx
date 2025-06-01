import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {children}
            </h4>
        ),
        ul: ({ children }) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
        ),
        ol: ({ children }) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
        ),
        hr: () => <Separator className="my-4" />,
        a: ({ href, children }) => (
            <Link
                href={href || ''}
                className="font-medium text-primary underline underline-offset-4"
            >
                {children}
            </Link>
        ),
        table: ({ children }) => <Table>{children}</Table>,
        tbody: ({ children }) => <TableBody>{children}</TableBody>,
        thead: ({ children }) => <TableHeader>{children}</TableHeader>,
        caption: ({ children }) => <TableCaption>{children}</TableCaption>,
        tr: ({ children }) => <TableRow>{children}</TableRow>,
        td: ({ children }) => <TableCell>{children}</TableCell>,
        tfoot: ({ children }) => <TableFooter>{children}</TableFooter>,
        th: ({ children }) => <TableHead>{children}</TableHead>,
        ...components,
    }
}
