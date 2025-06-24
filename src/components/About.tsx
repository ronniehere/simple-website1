
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h2>
        </div>
        
        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t("about.ourStory")}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t("about.ourStoryText")}
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t("about.whySimple")}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t("about.whySimpleText")}
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t("about.ourValues")}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t("about.ourValuesText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
