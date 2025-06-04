export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="py-32 px-4 sm:px-6 lg:px-0 lg:w-[60%] mx-auto space-y-2">
            {children}
        </main>
    );
}
