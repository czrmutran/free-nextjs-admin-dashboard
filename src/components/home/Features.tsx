import SectionTitle from "../common/SectionTitle";
import SingleFeature from "../home/SingleFeature";
import featuresData from "../home/FeaturesData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-[#000000]">
        <div className="container">
          <SectionTitle
            title="Principais Recursos"
            paragraph="Nossa plataforma foi desenvolvida para facilitar a criação, envio e gestão de formulários com inteligência e flexibilidade."
            center
          />

          <div className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;