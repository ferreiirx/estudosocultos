import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-accent text-accent-foreground font-bold text-lg py-6 px-8 rounded-lg shadow-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105",
        "shadow-[0_0_25px_0px_hsl(var(--accent)_/_0.6),inset_0_0_10px_0px_hsl(var(--accent)_/_0.4)]",
        className
      )}
      {...props}
    />
  );
}
