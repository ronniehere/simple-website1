
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyChoose = () => {
  const features = [
    {
      title: "Fully Insured Staff",
      description: "Our entire team is fully insured, providing you with peace of mind and protection."
    },
    {
      title: "Eco-Friendly Products",
      description: "We use environmentally responsible cleaning products that are effective yet safe."
    },
    {
      title: "Satisfaction Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee on all services."
    },
    {
      title: "Reliable Scheduling",
      description: "Consistent, on-time service you can count on, every time."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Simple.</h2>
          <p className="text-xl text-gray-600">The clear choice for professional commercial cleaning</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
