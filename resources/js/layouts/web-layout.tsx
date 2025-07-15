import Navbar from '@/components/home-components/navbar';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top';

export default function WebLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-50 text-zinc-800">
                {children}
            </main>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
