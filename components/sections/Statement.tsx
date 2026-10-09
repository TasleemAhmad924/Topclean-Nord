import { Container } from "@/components/layout/Container";
import { MaskedLines } from "@/components/motion/MaskedLines";

export function Statement() {
  return (
    <section className="bg-surface py-28 md:py-40">
      <Container>
        <p className="text-[clamp(3rem,8vw,6.75rem)] font-semibold leading-[1.02] tracking-tight text-ink text-balance">
          <MaskedLines lines={["Sauberkeit ist für uns", "keine Nebensache."]} stagger={0.1} />
        </p>
      </Container>
    </section>
  );
}
