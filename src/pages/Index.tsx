import Hero from "@/components/Hero";
import Story from "@/components/Story";
import portraitAsset from "@/assets/anubhav-photo-2.jpeg.asset.json";

const portrait = portraitAsset.url;

const Index = () => {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white">
      {/* Fixed cinematic backdrop — stays put while content scrolls over it */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]"
      >
        {/* Oversized portrait, anchored to viewport bottom-right */}
        <div className="absolute -bottom-[10%] -right-[8%] w-[95%] md:w-[70%] lg:w-[60%] xl:w-[55%] h-[120%]">
          <img
            src={portrait}
            alt=""
            className="absolute inset-0 w-full h-full object-contain object-bottom grayscale contrast-[1.15] brightness-[0.95]"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 80% at 65% 55%, black 45%, transparent 92%)",
              maskImage:
                "radial-gradient(ellipse 70% 80% at 65% 55%, black 45%, transparent 92%)",
            }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-transparent" />
        </div>

        {/* Global vignette */}
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)]" />
      </div>

      {/* Scrollable content layer */}
      <div className="relative z-10">
        <Hero />
        <Story />
      </div>
    </main>
  );
};

export default Index;
