interface PullquoteProps {
  children: React.ReactNode;
  cite?: string;
}

export function Pullquote({ children, cite }: PullquoteProps) {
  return (
    <blockquote className="pullquote my-10">
      <p className="m-0 leading-relaxed">{children}</p>
      {cite && (
        <footer className="badge-text mt-4 not-italic opacity-60">
          {cite}
        </footer>
      )}
    </blockquote>
  );
}
