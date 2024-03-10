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
            <body>
                <header
                    style={{
                        backgroundColor: "lightblue",
                        padding: "1rem"
                    }}
                >
                    Header
                </header>
                {children}
                <footer
                    style={{
                        backgroundColor: "ghostwhite",
                        padding: "1rem"
                    }}
                >
                    Footer
                </footer>
            </body>
        </html>
    );
}
