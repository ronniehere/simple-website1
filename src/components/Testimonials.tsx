
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Simple. has transformed our office environment. Their attention to detail and consistent quality have made them an invaluable partner for our business.",
      author: "Sarah Johnson",
      title: "Office Manager, Apex Technologies"
    },
    {
      quote: "We've worked with several cleaning companies over the years, but none have matched the professionalism and reliability of Simple. They truly live up to their name.",
      author: "Michael Chen",
      title: "Property Manager, Westside Commercial Properties"
    },
    {
      quote: "After our recent renovation, Simple. handled our post-construction cleanup with incredible efficiency. Our space was ready for business ahead of schedule.",
      author: "David Rodriguez",
      title: "Owner, Coastal Restaurant Group"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-8">
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
