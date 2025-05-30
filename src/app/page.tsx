import EditorFeaturesSection from "@/components/home/editor";
import FeaturesSection from "@/components/home/features";
import HeroSection from "@/components/home/hero";
import OpenSourceSection from "@/components/home/open-source";
import TracerFeaturesSection from "@/components/home/tracer";
import WorkflowsFeaturesSection from "@/components/home/workflows";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <main className="flex flex-col grow h-full w-full">
            <HeroSection />
            <Separator />
            <FeaturesSection />
            <EditorFeaturesSection />
            <WorkflowsFeaturesSection />
            <TracerFeaturesSection />
            <OpenSourceSection />
        </main>
    );
}
