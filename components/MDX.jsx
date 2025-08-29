import Markdown from "markdown-to-jsx";
import TopNav from "./TopNav";

export default function MDX(props) {
    const { text } = props // gives us access to the text attribute (or the value assigned to it really)
    const md = `# this is a header 1
## this is a header 2

hello world
[click me](https://www.google.com)
    `
    return (
        <section className="mdx-container">
            <TopNav {...props} />
            <article>
                <Markdown>
                    {text.trim() || 'Hop in the editor to create a new note'}
                </Markdown>
            </article>
        </section>
    )
}