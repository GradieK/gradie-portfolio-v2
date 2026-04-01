interface PhoneFrameProps {
  label: string;
  color?: string;
  children?: React.ReactNode;
}

export default function PhoneFrame({ label, color = "bg-secondary/10", children }: PhoneFrameProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-[200px] sm:w-[240px] h-[420px] sm:h-[480px] bg-foreground rounded-[2.5rem] p-2.5 border-[5px] border-foreground/80 shadow-2xl relative">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground rounded-b-2xl z-10" />
        {/* Screen */}
        <div className={`${color} bg-card rounded-[2rem] overflow-hidden h-full flex flex-col`}>
          {children || (
            <>
              <div className="h-12 bg-secondary/20 flex items-center justify-center">
                <div className="w-16 h-2 bg-secondary/30 rounded-full" />
              </div>
              <div className="flex-1 p-4 space-y-3">
                <div className="w-3/4 h-3 bg-foreground/10 rounded-full" />
                <div className="w-1/2 h-3 bg-foreground/10 rounded-full" />
                <div className="mt-4 h-20 bg-secondary/10 rounded-2xl" />
                <div className="h-10 bg-primary/20 rounded-xl" />
              </div>
            </>
          )}
        </div>
      </div>
      <span className="font-mono text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
