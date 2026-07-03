export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-1 py-1" aria-label="Bot đang trả lời">
      {[0, 120, 240].map((delay) => (
        <span
          key={delay}
          className="h-2 w-2 animate-bounce rounded-full bg-primary"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}
