
import { StaffingNavigation } from "@/components/StaffingNavigation";
import { StaffingHero } from "@/components/staffing/StaffingHero";
import { StaffingSolutions } from "@/components/staffing/StaffingSolutions";
import { StaffingServices } from "@/components/staffing/StaffingServices";
import { StaffingProcess } from "@/components/staffing/StaffingProcess";
import { StaffingBenefits } from "@/components/staffing/StaffingBenefits";
import { StaffingCTA } from "@/components/staffing/StaffingCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const StaffingOnly = () => {
  return (
    <div className="min-h-screen bg-white">
      <StaffingNavigation />
      <div className="pt-16"> {/* Add padding to account for fixed navigation */}
        <div id="staffing-hero">
          <StaffingHero />
        </div>
        <div id="staffing-solutions">
          <StaffingSolutions />
        </div>
        <div id="staffing-services">
          <StaffingServices />
        </div>
        <div id="staffing-process">
          <StaffingProcess />
        </div>
        <div id="staffing-benefits">
          <StaffingBenefits />
        </div>
        <StaffingCTA />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default StaffingOnly;
