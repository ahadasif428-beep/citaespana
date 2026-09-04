export default function SpainFlagWaving({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`spain-flag-wrap pointer-events-none absolute right-[-8%] top-[4%] z-0 w-[760px] max-w-[78vw] opacity-[0.22] ${className}`}
    >
      <div className="spain-flag spain-flag-1">
        <div className="spain-flag-shine" />
      </div>
      <div className="spain-flag spain-flag-2" />
      <div className="spain-flag spain-flag-3" />
    </div>
  );
}
