
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const StaffingServices = () => {
  const services = [
    {
      title: "Industrial Staffing",
      description: "Qualified workers for manufacturing, warehouse operations, assembly lines, and production facilities."
    },
    {
      title: "Construction Staffing", 
      description: "Skilled and general laborers for construction sites, renovation projects, and building maintenance."
    },
    {
      title: "Logistics & Moving",
      description: "Reliable personnel for loading/unloading, moving services, delivery operations, and inventory management."
    },
    {
      title: "Janitorial & Maintenance",
      description: "Experienced staff for cleaning, maintenance, groundskeeping, and facility management roles."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
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
