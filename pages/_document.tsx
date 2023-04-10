import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="min-h-screen w-screen overflow-x-hidden bg-eerieBlack bg-circuit bg-left text-columbiaBlue transition-all duration-150 ease-out">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
