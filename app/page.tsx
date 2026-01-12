import { Hero } from "@/components/sections/Hero";
import { Framework } from "@/components/sections/Framework";
import { LaunchPhases } from "@/components/sections/LaunchPhases";
import { AwarenessBudget } from "@/components/sections/AwarenessBudget";
import { AcquisitionBudget } from "@/components/sections/AcquisitionBudget";
import { Revenue } from "@/components/sections/Revenue";
import { ROI } from "@/components/sections/ROI";
import { Testing } from "@/components/sections/Testing";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Framework />
      <LaunchPhases />
      <AwarenessBudget />
      <AcquisitionBudget />
      <Revenue />
      <ROI />
      <Testing />
    </main>
  );
}
