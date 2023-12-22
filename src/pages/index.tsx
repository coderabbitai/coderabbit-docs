import { Redirect } from "@docusaurus/router";

export default function Home(): JSX.Element {
    // const { siteConfig } = useDocusaurusContext();
    return <Redirect to="/docs/introduction" />;
}
