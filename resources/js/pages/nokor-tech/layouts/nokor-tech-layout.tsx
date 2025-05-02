import { Toaster } from '@/components/ui/sonner';
import useTranslation from '@/hooks/use-translation';
import { type ReactNode } from 'react';
import MyFooter from '../components/my-footer';
import MyHeader from '../components/my-header';

interface NokorTechLayoutProps {
    children: ReactNode;
}

const NokorTechLayout = ({ children }: NokorTechLayoutProps) => {
    const { currentLocale } = useTranslation();
    return (
        <>
            <MyHeader />

            <div className={`${currentLocale == 'kh' ? 'font-siemreap-regular' : 'font-poppins-regular'}`}>{children}</div>
            <Toaster />
            <MyFooter />
        </>
    );
};

export default NokorTechLayout;
