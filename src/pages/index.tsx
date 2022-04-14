import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import CometLogoColorClaim from "@site/static/img/comet-color-claim.svg";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <CometLogoColorClaim />
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/intro">
                        Docs
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <HomePageOverview />
            </main>
        </Layout>
    );
}

function HomePageOverview(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row" style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ flex: 1, marginRight: 40 }}>
                        <p>
                            COMET DSP is a digital experience platform that or orchestrates content, internal and external data, own and third party
                            services, authentication and many more aspects of modern web and native applications
                        </p>
                        <p>
                            It manages navigational structures as well as digital assets, workflows and custom user rights deriving from third-party
                            identity providers. It is optimized for search engines on the one hand and provides APIs for intranets on the other hand.
                            It is a multi-channel, multi-language and multi instance system
                        </p>
                        <p>
                            It is cloudnative, microservice based and very modular. It scales when necessary. It is headless to provider maximum
                            flexibility for the frontend
                        </p>
                        <p>COMET DXP is built upon the COMET technology stack of Vivid Planet Software GmbH</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        {" "}
                        <img className={styles.featureSvg} src={"img/overview.png"} />
                    </div>
                </div>
            </div>
        </section>
    );
}
