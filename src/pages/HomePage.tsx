import { CTASection } from "../components/sections/CTASection";
import { FeatureGridSection } from "../components/sections/FeatureGridSection";
import { HeroSection } from "../components/sections/HeroSection";
import { PricingTeaser } from "../components/sections/PricingTeaser";
import { ProductSnapshotSection } from "../components/sections/ProductSnapshotSection";
import { WorkflowSection } from "../components/sections/WorkflowSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductSnapshotSection />
      <FeatureGridSection />
      <WorkflowSection />
      <PricingTeaser />
      <CTASection />
    </>
  );
}
