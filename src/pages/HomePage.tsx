import { CTASection } from "../components/sections/CTASection";
import { BenefitsSection } from "../components/sections/BenefitsSection";
import { FeatureGridSection } from "../components/sections/FeatureGridSection";
import { HeroSection } from "../components/sections/HeroSection";
import { PricingTeaser } from "../components/sections/PricingTeaser";
import { ProblemSolutionSection } from "../components/sections/ProblemSolutionSection";
import { ProductSnapshotSection } from "../components/sections/ProductSnapshotSection";
import { WorkflowSection } from "../components/sections/WorkflowSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <ProductSnapshotSection />
      <FeatureGridSection />
      <WorkflowSection />
      <BenefitsSection />
      <PricingTeaser />
      <CTASection />
    </>
  );
}
