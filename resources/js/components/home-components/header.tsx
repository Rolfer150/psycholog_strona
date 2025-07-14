import Navbar from '@/components/home-components/navbar';
import { Button } from '../ui/button';

export default function Header({ title, description }: { title: string; description?: string }) {
    return (
        <header className="relative flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] bg-teal-400 text-white overflow-hidden">
            <div className="max-w-5xl w-full px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl mb-6">
                    {title}
                </h1>
                {description && (
                    <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto opacity-90 drop-shadow">
                        {description}
                    </p>
                )}
            </div>
            {/* Dekoracyjny element w tle */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110vw] h-24 bg-white/10 rounded-t-full blur-2xl" />
        </header>
    );

}
