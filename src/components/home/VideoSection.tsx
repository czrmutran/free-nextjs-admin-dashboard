'use client';
import SectionTitle from '../common/SectionTitle';

const VideoSection = () => {
  return (
    <section className="bg-gray-light dark:bg-[#000000] pt-10 md:pt-16 lg:pt-20 pb-20">
      <div className="container max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Tutorial em Vídeo"
          paragraph="Aprenda em poucos minutos a usar o sistema completo com nosso vídeo oficial."
          center
        />

        <div className="mt-8 aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/TfP5gjb77L0"
            title="Coelhinhos Fofos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;