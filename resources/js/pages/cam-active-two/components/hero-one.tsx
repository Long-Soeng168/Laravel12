import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, Handshake } from 'lucide-react';

const HeroOne = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto grid w-full max-w-screen-xl gap-12 px-6 py-20 lg:grid-cols-2">
                <div>
                    <h1 className="max-w-[10ch] text-4xl !leading-[1.2] font-bold md:text-5xl lg:text-[2.75rem] xl:text-7xl">
                        Welcome to Cam-Active
                    </h1>
                    <p className="mt-6 max-w-[60ch] text-xl">
                        Your partner for educational solutions and real-world impact. We’re Cam-Active—a team of passionate problem-solvers working at
                        the intersection of education and logistics.
                    </p>
                    <div className="mt-12 flex items-center gap-4">
                        <Link href={`/solutions`} prefetch>
                            <Button size="lg">
                                Explore Our Work <ArrowUpRight className="!h-5 !w-5" />
                            </Button>
                        </Link>
                        <Link href={`/contact`} prefetch>
                            <Button variant="outline" size="lg">
                                <Handshake className="!h-5 !w-5" /> Partner With Us
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="bg-transparent aspect-video w-full rounded-xl">
                    <img src="/assets/cam-active/hero1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroOne;
