import { HTMLAttributes } from "react";

const Heading1 = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
            {...props}
        >
            {children}
        </h1>
    );
};

const Heading2 = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h2
            className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
            {...props}
        >
            {children}
        </h2>
    );
};

const Heading3 = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h3
            className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
            {...props}
        >
            {children}
        </h3>
    );
};

const Heading4 = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h4
            className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
            {...props}
        >
            {children}
        </h4>
    );
};

const Lead = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p className={`text-xl text-muted-foreground ${className}`} {...props}>
            {children}
        </p>
    );
};

const Paragraph = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p
            className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
            {...props}
        >
            {children}
        </p>
    );
};

const Blockqoute = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLQuoteElement>) => {
    return (
        <blockquote
            className={`mt-6 border-l-2 pl-6 italic ${className}`}
            {...props}
        >
            {children}
        </blockquote>
    );
};

const Large = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p className={`text-lg font-semibold ${className}`} {...props}>
            {children}
        </p>
    );
};

const Small = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <small
            className={`text-sm font-medium leading-none ${className}`}
            {...props}
        >
            {children}
        </small>
    );
};

const Mute = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <p className={`text-sm text-muted-foreground ${className}`} {...props}>
            {children}
        </p>
    );
};

const InlineCode = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <code
            className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}
            {...props}
        >
            {children}
        </code>
    );
};

const UnorderedList = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLUListElement>) => {
    return (

        <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`} {...props} >
            {children}
        </ul>
    );
};

const OrderedList = ({
    children,
    className = '',
    ...props
}: HTMLAttributes<HTMLOListElement>) => {
    return (

        <ol className={`my-6 ml-6 list-decimal [&>li]:mt-2 ${className}`} {...props} >
            {children}
        </ol>
    );
};


export { Heading1, Heading2, Heading3, Heading4, Lead, Paragraph, Blockqoute, Large, Small, Mute, InlineCode, UnorderedList, OrderedList };
