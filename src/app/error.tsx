"use client";

import { Container } from "@/components/ui/Container";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  // Suppress unused-vars lint; error.digest is useful for server-side tracking
  void error;

  return (
    <section className="flex min-h-[70dvh] items-center justify-center">
      <Container className="text-center">
        <p className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] text-gold mb-4">Error</p>
        <h1 className="font-display text-[length:var(--text-3xl)] leading-[1.1] text-text-primary mb-6">Algo salió mal</h1>
        <p className="text-[length:var(--text-sm)] leading-[1.7] text-text-secondary mx-auto mb-10 max-w-[44rem]">
          Ocurrió un error inesperado. Intentá de nuevo.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-block rounded-xl bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-wider text-dark transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Reintentar
        </button>
      </Container>
    </section>
  );
}
