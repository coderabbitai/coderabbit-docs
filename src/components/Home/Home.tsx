import React from "react";
import styles from "./Home.module.css";
import Layout from "@theme/Layout";
import { Content } from "@theme/BlogPostPage";
import clsx from "clsx";

interface HomeProps {
  readonly blogPosts: readonly { readonly Preview: Content; metadata: any }[];
}

function Home({ blogPosts }: HomeProps): JSX.Element {
  return (
    <Layout>
      <div className="container margin-top--lg margin-bottom--lg">
        <div className="row">
          <div className="col col--3 col--offset-1 ">
            <h1>Featured Posts</h1>
          </div>
        </div>
        <div className="row">
          {blogPosts.map(({ metadata }, index) => (
            <HomeCard
              key={`${metadata.date}-${index}-home`}
              index={index}
              metadata={metadata}
              context={"home"}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;

export function HomeCard({ index, metadata, context }): JSX.Element {
  return (
    <div className={`${clsx("col col--3 col--offset-1")} ${styles.card}`}>
      <div className="text--center">
        <img src={metadata.image} alt={metadata.title} width="100" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{metadata.title}</h3>
        <p>{metadata.description}</p>
        <a href={metadata.link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
}
