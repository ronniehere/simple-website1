
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const StaffingBenefits = () => {
  const benefits = [
    {
      title: "Time Savings",
      description: "Save valuable time by outsourcing the recruitment, screening, and administrative processes to our experienced team."
    },
    {
      title: "Cost Efficiency",
      description: "Reduce overhead costs associated with recruitment, training, and employee benefits while maintaining a flexible workforce."
    },
    {
      title: "Scalability",
      description: "Easily scale your workforce up or down based on seasonal demands, project requirements, or business fluctuations."
    },
    {
      title: "Reduced Risk",
      description: "Minimize employment risks with our fully insured and compliant staffing solutions that handle worker compensation and liability."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Our Staffing Services</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
