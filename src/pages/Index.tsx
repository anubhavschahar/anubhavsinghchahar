import Hero from "@/components/Hero";
import Story from "@/components/Story";

const portrait = "/hero-bg.jpg";


const Index = () => {
  return (
    <main className="relative min-h-screen text-[#F5F5F5]">
      {/* Fixed cinematic backdrop — never moves on scroll */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-[#0A0A0A] overflow-hidden pointer-events-none"
      >
        <img
          src={portrait}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] select-none"
          style={{
            filter: "grayscale(100%) brightness(0.5) contrast(1.08)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%)",
          }}
          draggable={false}
        />
        {/* Vertical vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0) 20%, rgba(10,10,10,0) 80%, rgba(10,10,10,0.9) 100%)",
          }}
        />
        {/* Radial darken edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <Hero />
      <Story />
    </main>
  );
};

export default Index;
