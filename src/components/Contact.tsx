
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

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
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">{t("contact.form.name")}</Label>
                <Input id="name" type="text" />
              </div>
              <div>
                <Label htmlFor="email">{t("contact.form.email")}</Label>
                <Input id="email" type="email" />
              </div>
              <div>
                <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                <Input id="phone" type="tel" />
              </div>
              <div>
                <Label htmlFor="message">{t("contact.form.message")}</Label>
                <Textarea id="message" rows={4} />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                {t("contact.form.submit")}
              </Button>
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
