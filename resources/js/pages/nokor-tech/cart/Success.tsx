import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import NokorTechLayout from '../layouts/nokor-tech-layout';

const Success = () => {
    return (
        <NokorTechLayout>
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
                <h1 className="mt-4 text-3xl font-semibold text-gray-800">Thanks For Order!</h1>
                <p className="mt-2 text-gray-600">Your Order Has Been Successfully Placed.</p>
                <p className="mt-2 text-gray-600">We Will Get Back To You As Soon As Possible</p>

                <Link href="/">
                    <Button className="mt-6">Return To Home Page</Button>
                </Link>
            </div>
        </NokorTechLayout>
    );
};

export default Success;
