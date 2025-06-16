
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const StaffingProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Consultation",
      description: "We meet with you to understand your specific staffing needs, job requirements, company culture, and timeline."
    },
    {
      number: "2",
      title: "Recruitment & Screening", 
      description: "Our team sources, interviews, and thoroughly screens candidates to ensure they meet your requirements."
    },
    {
      number: "3",
      title: "Selection & Training",
      description: "We select the best candidates and provide any necessary training or orientation specific to your business needs."
    },
    {
      number: "4",
      title: "Placement & Support",
      description: "Workers are placed at your location with ongoing support and management from our team to ensure success."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Staffing Process</h2>
          <p className="text-xl text-gray-600">How we ensure you get the right people for your business</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="h-full border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl text-blue-900">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
