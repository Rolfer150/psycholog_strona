// resources/js/Layouts/WebLayout.jsx
import Navbar from '@/components/home-components/navbar';
import Footer from '@/components/footer';

export default function WebLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
}
