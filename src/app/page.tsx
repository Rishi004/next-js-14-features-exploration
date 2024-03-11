import Link from "next/link";

export default function page() {
    return (
        <>
            <h1>Hello World</h1>
            <Link href="/blog">Blog</Link>
            <br />
            <Link href="/products">Products</Link>
        </>
    );
}
