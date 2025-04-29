import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

const MyProductListHeader = ({ title }: { title: string }) => {
    return (
        <div className="border-primary mx-2 mb-2 flex items-center justify-between border-b pt-8">
            <p className="bg-primary rounded-tl-full rounded-br-full px-8 py-1 text-lg font-bold text-white">{title}</p>
            <Link href="/products">
                <p className="text-md text-primary flex items-center gap-2 underline-offset-2 transition-all duration-300 hover:translate-x-2 hover:underline">
                    See More <ChevronRight size={24} />
                </p>
            </Link>
        </div>
    );
};

export default MyProductListHeader;
