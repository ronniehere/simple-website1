
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted with data:", data);
    
    try {
      // Simulate form submission - in a real app, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.description"),
      });
      
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.description"),
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-gray-600">{t("contact.subtitle")}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.form.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.name")}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.phone")}</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.message")}</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t("contact.info.title")}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{t("contact.info.phone")}</h4>
                  <p className="text-gray-600">(514) 237-6303</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t("contact.info.email")}</h4>
                  <p className="text-gray-600">info@ssimple.ca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
