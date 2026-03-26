export default function Loading() {
  return (
    <div className="flex min-h-[70dvh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-gold"
          role="status"
          aria-label="Cargando"
        />
        <p className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] text-gold">Cargando…</p>
      </div>
    </div>
  );
}
