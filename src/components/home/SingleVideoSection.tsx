type Props = {
    videoUrl: string;
    title: string;
    description: string;
  };
  
  const SingleVideoSection = ({ videoUrl, title, description }: Props) => {
    return (
      <div className="rounded-xl bg-[#027B3F]/90 p-4 shadow-lg transition duration-300 dark:bg-[#027B3F]/90">
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
          <iframe
            className="w-full h-full rounded-lg"
            src={`${videoUrl}?cc_load_policy=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <h3 className="text-white text-xl font-semibold mb-1 text-center">{title}</h3>
        <p className="text-white text-base text-center">{description}</p>
      </div>
    );
  };
  
  export default SingleVideoSection;