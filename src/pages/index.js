import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import TrackingComponent from "@site/src/components/tracking-component";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import HeroSection from "../components/hero-component";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero shadow--lw", styles.heroBanner)}>
      <div className={clsx("container", styles.heroBannerBackground)}>
        <div className="row">
          <div className={clsx("col col--6", styles.heroBannerText)}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg from-cyan-500 to-blue-500"
                to="/docs/intro"
              >
                Locate me
              </Link>
            </div>
          </div>
          <div
            className={clsx("col col--6", styles.heroBannerPlaceholder)}
          ></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HeroSection title={siteConfig.title} tagline={siteConfig.tagline} />
      <main>
        <TrackingComponent />
      </main>
    </Layout>
  );
}
