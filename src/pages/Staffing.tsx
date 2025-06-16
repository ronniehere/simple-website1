
import { Navigation } from "@/components/Navigation";
import { StaffingHero } from "@/components/staffing/StaffingHero";
import { StaffingSolutions } from "@/components/staffing/StaffingSolutions";
import { StaffingServices } from "@/components/staffing/StaffingServices";
import { StaffingProcess } from "@/components/staffing/StaffingProcess";
import { StaffingBenefits } from "@/components/staffing/StaffingBenefits";
import { StaffingCTA } from "@/components/staffing/StaffingCTA";
import { Footer } from "@/components/Footer";

const Staffing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16"> {/* Add padding to account for fixed navigation */}
        <StaffingHero />
        <StaffingSolutions />
        <StaffingServices />
        <StaffingProcess />
        <StaffingBenefits />
        <StaffingCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Staffing;
