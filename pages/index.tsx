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
            <main className="h-screen bg-slate-500 p-1 sm:p-2 md:p-4">
                <section className="md:mx-2">
                    <h1 className="text-4xl font-bold">Patrick James McPherson</h1>
                    <h6>SOFTWARE ENGINEER</h6>
                    <small>
                        CURIOSITY, TEAM PARTICIPATION, AND THE BLISS OF OVERCOMING CHALLENGES ARE
                        KEY DRIVING FACTORS TO MY WORK ETHIC.
                    </small>
                </section>
                <section>
                    <article>
                        <h2>PROJECTS</h2>
                    </article>
                    <article>
                        <h2>ABOUT ME</h2>
                    </article>
                    <article>
                        <h2>SKILLS</h2>
                    </article>
                </section>
                <section>
                    <h2>CONTACT</h2>
                    <small>
                        Please contact me if you are looking for a new software engineer to build
                        great apps, adapt, and learn along the way.
                    </small>
                    <footer>
                        <form name="contact" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows={4} />
                            </div>
                            <button type="submit" value="Send Message">
                                Send
                            </button>
                        </form>
                        <ul>
                            <li>Santa Barbara, CA</li>
                            <li>(805) 570-8845</li>
                            <li>patrick.j.mcpherson@gmail.com</li>
                            <li>
                                <a href="https://github.com/Patricus" target="_blank">
                                    Github Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/patrick-mcpherson-438385117/"
                                    target="_blank">
                                    LinkedIn Profile
                                </a>
                            </li>
                            <li>
                                <a
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
