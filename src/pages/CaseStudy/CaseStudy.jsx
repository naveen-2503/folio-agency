import CaseStudyHero from "./CaseStudyHero"; 
import Overview from "../../components/Overview/Overview";
import ByTheNumbers from "../../components/ByTheNumbers/ByTheNumbers";
import VisualIdentity from "../../components/VisualIdentity/VisualIdentity";
import CallToAction from "../../components/CallToAction/CallToAction";
import RecentWorks from "../../components/RecentWorks/RecentWorks";
import FooterCTA from "../../components/FooterCTA/FooterCTA";

const CaseStudy = () => {
  return (
    <>
      <CaseStudyHero />
      <Overview />
      <ByTheNumbers />
      <VisualIdentity />
      <CallToAction />
      <RecentWorks />
      <FooterCTA />
    </>
  );
};

export default CaseStudy;