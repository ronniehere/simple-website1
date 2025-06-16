
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Office Cleaning",
      description: "Comprehensive cleaning services for offices of all sizes, ensuring a pristine work environment for your team and visitors."
    },
    {
      title: "Commercial Property Cleaning", 
      description: "Specialized cleaning solutions for retail spaces, restaurants, hotels, and other commercial properties."
    },
    {
      title: "Post-Construction Cleanup",
      description: "Thorough cleaning services after construction or renovation projects, preparing your space for immediate use."
    },
    {
      title: "Scheduled Maintenance",
      description: "Regular cleaning programs customized to your specific needs and schedule, ensuring consistent cleanliness."
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive cleaning solutions tailored to your business needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
