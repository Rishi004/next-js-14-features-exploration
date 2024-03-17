"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/"); //  Go to home page after placing the order
        // router.replace("/"); //  Replace the current page with /
        // router.back(); //  Go back in history
        // router.forward(); //  Move forward in history
    };
    return (
        <>
            <h1>Order product</h1>
            <button onClick={handleClick}>Place order</button>
        </>
    );
}
