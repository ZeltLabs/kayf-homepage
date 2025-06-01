export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="py-32 px-4 sm:px-6 lg:px-20">
            {children}
        </main>
    );
}
