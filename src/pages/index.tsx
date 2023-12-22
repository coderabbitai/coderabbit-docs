import { useEffect } from "react";

export default function Home(): JSX.Element {
    // const { siteConfig } = useDocusaurusContext();
    useEffect(() => {
        // Redirect to external URL when the component mounts
        window.location.href = "https://docs.coderabbit.ai";
    }, []);
    return <></>;
}
