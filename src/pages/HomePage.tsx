import { CTASection } from "../components/sections/CTASection";
import { BenefitsSection } from "../components/sections/BenefitsSection";
import { DemoRunSimulator } from "../components/sections/DemoRunSimulator";
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
      <DemoRunSimulator />
      <BenefitsSection />
      <PricingTeaser />
      <CTASection />
    </>
  );
}
