import { cn } from "@/lib/utils";
import LogoSvg from "@/../public/logo.svg"; // Will be treated as React component with SVGR

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <LogoSvg className="h-5 w-auto text-foreground" />
            <span className="font-bold text-xl text-foreground text-base">Kayf</span>
        </div>
    );
};

