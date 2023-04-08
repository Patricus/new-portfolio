import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Patrick McPherson</title>
                <meta name="description" content="Patrick McPherson's Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="grid max-w-5xl auto-rows-auto gap-2 p-1 sm:gap-3 sm:p-2 md:p-4">
                <section className="animate-[fade-in-down_1s_forwards] rounded border-2 border-columbiaBlue border-opacity-10 bg-night opacity-0 shadow-md shadow-charcoal backdrop-blur-lg md:mx-2 lg:px-2 lg:py-1 xl:px-3">
                    <h1 className="text-4xl font-bold">Patrick James McPherson</h1>
                    <h6>SOFTWARE ENGINEER</h6>
                    <small>
                        CURIOSITY, TEAM PARTICIPATION, AND THE BLISS OF OVERCOMING CHALLENGES ARE
                        KEY DRIVING FACTORS TO MY WORK ETHIC.
                    </small>
                </section>
                <section className="animate-[fade-in-down_1s_forwards_500ms] rounded border-2 border-columbiaBlue border-opacity-10 bg-night opacity-0 shadow-md shadow-charcoal backdrop-blur-lg delay-150 md:mx-2 lg:px-2 lg:py-1 xl:px-3">
                    <article>
                        <h2>PROJECTS</h2>
                        <div>Projects will display here</div>
                    </article>
                    <article>
                        <h2>ABOUT ME</h2>
                        <div>About Me will display here</div>
                    </article>
                    <article>
                        <h2>SKILLS</h2>
                        <div>Skills will display here</div>
                    </article>
                </section>
                <section className="animate-[fade-in-down_1s_forwards_1000ms] rounded border-2 border-columbiaBlue border-opacity-10 bg-night opacity-0 shadow-md shadow-charcoal backdrop-blur-lg delay-300 md:mx-2 lg:px-2 lg:py-1 xl:px-3">
                    <h2>CONTACT</h2>
                    <small>
                        Please contact me if you are looking for a new software engineer to build
                        great apps, adapt, and learn along the way.
                    </small>
                    <footer className="md:grid md:grid-flow-col">
                        <form
                            name="contact"
                            method="post"
                            data-netlify="true"
                            className="mt-6 px-3">
                            <input type="hidden" name="form-name" value="contact" />
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="w-20">
                                            <label htmlFor="name">Name</label>
                                        </td>
                                        <td>
                                            <input
                                                className="w-full px-1 outline-emerald"
                                                type="text"
                                                id="name"
                                                name="name"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">
                                            <label htmlFor="email">Email</label>
                                        </td>
                                        <td>
                                            <input
                                                className="w-full px-1 outline-emerald"
                                                type="email"
                                                id="email"
                                                name="email"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-20">
                                            <label htmlFor="message">Message</label>
                                        </td>
                                        <td>
                                            <textarea
                                                className="w-full resize-none px-1 outline-emerald"
                                                id="message"
                                                name="message"
                                                rows={5}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button
                                className="w-full rounded border border-night bg-charcoal px-2 text-columbiaBlue shadow shadow-transparent hover:text-emerald hover:shadow-emerald"
                                type="submit"
                                value="Send Message">
                                Send
                            </button>
                        </form>
                        <ul className="ml-3 mt-6 grid grid-cols-2 justify-items-center gap-1 md:ml-6 md:grid-cols-1 md:justify-items-start">
                            <li className="underline decoration-emerald underline-offset-2">
                                Santa Barbara, CA
                            </li>
                            <li className="underline decoration-emerald underline-offset-2">
                                (805) 570-8845
                            </li>
                            <li className="underline decoration-emerald underline-offset-2">
                                patrick.j.mcpherson@gmail.com
                            </li>
                            <li className="underline decoration-emerald underline-offset-2">
                                <a
                                    className="font-medium hover:text-emerald"
                                    href="https://github.com/Patricus"
                                    target="_blank">
                                    Github Profile
                                </a>
                            </li>
                            <li className="underline decoration-emerald underline-offset-2">
                                <a
                                    className="font-medium hover:text-emerald"
                                    href="https://www.linkedin.com/in/patrick-mcpherson-438385117/"
                                    target="_blank">
                                    LinkedIn Profile
                                </a>
                            </li>
                            <li className="underline decoration-emerald underline-offset-2">
                                <a
                                    className="font-medium hover:text-emerald"
                                    href="https://docs.google.com/document/d/19_oF2_odSr7qvdrX-GfzNCWMue7b0FWU8suhrIlu4pY/edit?usp=sharing"
                                    target="_blank">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </footer>
                </section>
            </main>
        </>
    );
}
