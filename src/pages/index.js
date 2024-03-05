import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import TrackingComponent from "@site/src/components/tracking-component";

import HeroSection from "../components/hero-component";
import SpecialThanksComponent from "../components/special-thanks-component";
import InstagramFeedComponent from "../components/instagram-feed-component";
import ReasonToCycleComponent from "../components/reason-to-cycle-component";
import FundComponent from '../components/fund-component';
import FundContributorsComponent from '../components/fund-contributors-component';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HeroSection title={siteConfig.title} tagline={siteConfig.tagline} />
      <main>
        <ReasonToCycleComponent />
        <TrackingComponent />
        {/* <InstagramFeedComponent />
         */}
        <SpecialThanksComponent />
        <FundComponent></FundComponent>
        <FundContributorsComponent></FundContributorsComponent>
      </main>
    </Layout>
  );
}


