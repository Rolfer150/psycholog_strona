import { Link } from '@inertiajs/react';

export default function Heading() {
    return (
        <div className="mb-8 space-x-8 w-full p-8 flex justify-end bg-white text-black">
            <Link href={route('about')}>
                O mnie
            </Link>
            <Link href={route('services')}>
                Usługi
            </Link>
            <Link href={route('appointment')}>
                Umów wizytę
            </Link>
            <Link href={route('contact')}>
                Kontakt
            </Link>
        </div>
    );
}
