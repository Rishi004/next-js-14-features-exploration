export default function ProductDetailsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <h2>Features products</h2>
            {/* Imagine a Carousel of feature products is here */}
        </>
    );
}
