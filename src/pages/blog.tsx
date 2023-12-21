import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    // Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
    img: string;
    redirectTo: string;
    chips: string[];
    date: string;
    author: { name: string; img: string }[];
    authorImg: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Boosting Engineering Efficiency Using AI Code Reviews for Remote Teams",
        img: "img/blogs/blog4.jpeg",
        description: (
            <>
                In a world where the office is just a step away from your bed,
                we dive into the challenges and triumphs of maintaining code
                quality across continents.
            </>
        ),
        redirectTo: "/blog/boosting-engineering-efficiency",
        chips: ["AI", "Remote teams", "Code Reviews"],
        date: "Nov 13, 2023",
        author: [
            {
                name: "This Dot Labs",
                img: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/og7xjpegm86zqz3mfo3s",
            },
        ],
        authorImg: "img/blogs/blog4.jpeg",
    },
    {
        title: "Squeezing Water from Stone: Managing OpenAI Rate Limits with Request Prioritization",
        img: "img/blogs/Blog3.png",
        description: (
            <>
                How CodeRabbit uses Aperture to manage OpenAI rate limits with
                request prioritization
            </>
        ),
        redirectTo: "/blog/coderabbit-openai-rate-limits",
        chips: ["Rate limits", "Openai", "Prioritization"],
        date: "Oct 23, 2023",
        author: [
            { name: "Gur Singh", img: "img/authors/gur.jpeg" },
            { name: "Suman Kumar", img: "img/authors/suman.png" },
            {
                name: "Nathan Gendron",
                img: "https://avatars.githubusercontent.com/u/10495562?v=4",
            },
        ],
        authorImg: "img/blogs/Blog3.png",
    },
    {
        title: "How AI Code Review reclaims your team’s time",
        img: "img/blogs/BlogImage2.png",
        description: (
            <>
                In the era of building and improving products fast, engineering
                managers encounter fresh challenges that render traditional
                strategies outdated.
            </>
        ),
        redirectTo: "/blog/ai-code-reviews-reclaims",
        chips: ["AI", "GitHub", "Code Reviews"],
        date: "Oct 5, 2023",
        author: [
            {
                name: "Simone Cuomo",
                img: "https://media.licdn.com/dms/image/D4E03AQGnCY6ve8yozA/profile-displayphoto-shrink_400_400/0/1673905808955?e=1701907200&v=beta&t=tRqKsp-V6sHrf7wKUrw8YbLOZSF5DFXYbMsrRZW0Z2Y",
            },
        ],
        authorImg: "img/blogs/BlogImage2.png",
    },
    {
        title: "AI and the Future of Code Reviews: A Deep Dive Into CodeRabbit",
        img: "img/blogs/founder_blog_meta.jpeg",
        description: (
            <>
                We are witnessing an inflection point in the software
                development industry. Developers around the world have been
                realizing the incredible possibilities that AI can bring
            </>
        ),
        redirectTo: "/blog/coderabbit-deep-dive",
        chips: ["AI", "GitHub", "Code Reviews"],
        date: "Sept 4, 2023",
        author: [
            { name: "Gur Singh", img: "img/authors/gur.jpeg" },
            { name: "Vishu Kaur", img: "img/authors/vishu.jpg" },
        ],
        authorImg: "img/blogs/founder_blog_meta.jpeg",
    },
];

function Feature({
    img,
    title,
    description,
    redirectTo,
    chips,
    author,
    date,
    authorImg,
}) {
    return (
        <div className={[clsx("col col--3"), styles.featuresDiv].join(" ")}>
            <Link to={redirectTo} className={styles.featuresLink}>
                <div className="text--center">
                    <img className={styles.featureSvg} src={img} />
                </div>
                <div className={styles.featuresChipsDiv}>
                    {chips.map((chip) => (
                        <span className={styles.featuresChips}>{chip}</span>
                    ))}
                </div>
                <div
                    className={[
                        "padding-horiz--md",
                        styles.cardTextMaxHeight,
                        styles.padding2rem,
                    ].join(" ")}
                >
                    <h3 className={styles.cardHeader}>{title}</h3>
                    <p className={styles.featuresPara}>{description}</p>
                </div>
                <div>
                    <span className={styles.dateText}>{date}</span>
                </div>
                <div className={styles.chipsDiv}>
                    {author.map((author) => (
                        <div className={styles.authorDiv}>
                            <img
                                src={author.img}
                                className={styles.authorImg}
                            />
                            <div className={styles.authorNameDiv}>
                                <span className={styles.authorText}>
                                    {author.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Link>
        </div>
    );
}

function Blog(): JSX.Element {
    return (
        <div>
            <div className="col--12 mainDiv">
                <div className={styles.blogHeaderDiv}>
                    <span className={styles.blogHeader}>Blog</span>
                    <br />
                    <span className={styles.blogSubHeading}>
                        {" "}
                        Stay updated with the newest trends and insights in
                        software development and the evolving world of AI.{" "}
                    </span>
                </div>
                <div className={styles.flexContainer}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
