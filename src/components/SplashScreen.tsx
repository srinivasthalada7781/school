import { useEffect, useState } from "react";

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Start fade out after 2 seconds
        const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 2000);

        // Completely unmount after 2.5 seconds (gives 500ms for the fade-out animation)
        const unmountTimer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(unmountTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="relative">
                {/* Background glow effect for extra premium feel */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />

                {/* The Main Logo with entrance animations */}
                <img
                    src="/pictures/Genesis Stem Final Logo.png"
                    alt="Genesis International Montessori School"
                    className="relative w-64 md:w-80 h-auto object-contain animate-in zoom-in-50 spin-in-3 duration-1000 ease-out"
                />

                {/* Subtle loading text or dots underneath (optional, but adds to the cinematic feel) */}
                <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
