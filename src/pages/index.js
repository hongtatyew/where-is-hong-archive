import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import TrackingComponent from "@site/src/components/tracking-component";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import HeroSection from "../components/hero-component";
import SpecialThanksComponent from "../components/special-thanks-component";
import InstagramFeedComponent from "../components/instagram-feed-component";
import ReasonToCycleComponent from "../components/reason-to-cycle-component";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HeroSection title={siteConfig.title} tagline={siteConfig.tagline} />
      <main>
        <ReasonToCycleComponent />
        <TrackingComponent />
        {/* <InstagramFeedComponent />
        <SpecialThanksComponent /> */}
      </main>
    </Layout>
  );
}
