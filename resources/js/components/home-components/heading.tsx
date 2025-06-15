import Navbar from '@/components/home-components/navbar';
import { Button } from '../ui/button';

export default function Heading({ title, description }: { title: string; description?: string }) {
    return (
        <div className="mb-8 space-y-0.5 bg-teal-400 text-white">
            <Navbar></Navbar>
            <h2 className="text-6xl p-4 font-semibold tracking-tight w-2/3">{title}</h2>
            {description && <p className="text-muted-foreground text-sm">{description}</p>}
            <Button variant={"link"}>Umów wizytę już teraz</Button>
        </div>
    );
}
