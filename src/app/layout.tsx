export const metadata = {
    title: "Learn Next.js",
    description: "Created By Rishi"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
