import { ReactNode } from 'react';
import Footer from '../components/footer';
import { Navbar } from '../components/navbar';

const CamActiveLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <header className="mx-auto sticky top-0 z-50 px-2 bg-background/30 backdrop-blur-md">
                <Navbar />
            </header>
            <main className='min-h-[60vh]'>{children}</main>
            <Footer />
        </>
    );
};

export default CamActiveLayout;
