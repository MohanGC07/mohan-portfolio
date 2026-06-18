import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            AI • Robotics • Engineering
          </p>

          <h1 className="mt-6 text-7xl md:text-8xl font-light tracking-tight">
            Mohan G.C
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-neutral-400">
            Building intelligent systems, teaching robotics,
            and exploring the future of AI.
          </p>
        </div>
      </Container>
    </section>
  );
}