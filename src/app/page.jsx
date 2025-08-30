import React from "react";
import Link from "next/link";

export default function teste() {
    return (
        <>
            <h1 className="text-black">Pagina teste</h1>
            <Link href={"/private"} className="text-blue underline">Sign-In</Link>
        </>
    );
}
