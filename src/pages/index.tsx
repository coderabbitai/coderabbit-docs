import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";

// function HomepageHeader() {
//     const { siteConfig } = useDocusaurusContext();
//     return (
//         <header className={clsx("hero hero--primary", styles.heroBanner)}>
//             <div className="container">
//                 <Heading as="h1" className="hero__title">
//                     {siteConfig.title}
//                 </Heading>
//                 <p className="hero__subtitle">{siteConfig.tagline}</p>
//             </div>
//         </header>
//     );
// }

import { useHistory } from "react-router-dom"; // Import useHistory hook

function HomepageHeader() {
    const history = useHistory(); // Initialize useHistory hook

    // Function to navigate to the Blog section
    const goToBlog = () => {
        history.push("/blog"); // Redirect to the /blog route
    };

    // Function to navigate to the Docs section
    const goToDocs = () => {
        history.push("/docs/introduction"); // Redirect to the /docs route
    };

    return (
        <header>
            {/* Blog link */}
            <button onClick={goToBlog}>Go to Blog</button>

            {/* Docs link */}
            <button onClick={goToDocs}>Go to Docs</button>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Docs`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
