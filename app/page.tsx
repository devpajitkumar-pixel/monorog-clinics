import { HeroSection } from "@/components/sections/HeroSection";
import { TrustPillars } from "@/components/sections/TrustPillars";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { DoctorProfileSection } from "@/components/sections/DoctorProfileSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { LocationMapSection } from "@/components/sections/LocationMapSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustPillars />
      <AboutPreview />
      <ServicesGrid />
      <DoctorProfileSection />
      <AppointmentSection />
      <FaqSection />
      <LocationMapSection />
    </>
  );
}
