import CaseStudyHero from "./CaseStudyHero"; 
import Overview from "../../components/Overview/Overview";
import ByTheNumbers from "../../components/ByTheNumbers/ByTheNumbers";
import VisualIdentity from "../../components/VisualIdentity/VisualIdentity";
import CallToAction from "../../components/CallToAction/CallToAction";

const CaseStudy = () => {
  return (
    <>
      <CaseStudyHero />
      <Overview />
      <ByTheNumbers />
      <VisualIdentity />
      <CallToAction />
    </>
  );
};

export default CaseStudy;