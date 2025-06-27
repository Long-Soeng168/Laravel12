import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import FeaturedMedia from './components/featured-media';
import LatestPosts from './components/latest_posts';
import SectionHeader from './components/section-header';
import CamActiveLayout from './layouts/CamActiveLayout';

const Company = () => {
    return (
        <CamActiveLayout>
            <div className="bg-primary/10 py-10">
                <SectionHeader title="Insights" subtitle="Ideas that inspire. Knowledge that drives impact." />
            </div>
            <div className="my-20">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-end justify-between gap-4 px-6">
                    <div className="z-30 flex w-full justify-between">
                        <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
                        <Link href={`/posts`}>
                            <Button size="sm" variant="outline">
                                See More <ArrowRightIcon />
                            </Button>
                        </Link>
                    </div>
                </div>
                <LatestPosts />

                <FeaturedMedia />
                
                <div className="mx-auto max-w-screen-xl px-6">
                    <Card className="bg-primary/10 mt-8 flex flex-col gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-6 shadow-none transition sm:flex-col">
                        <CardContent className="flex flex-col justify-center p-0">
                            <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                                Contribute or Collaborate
                            </h3>
                            <p className="text-foreground mt-2 text-sm lg:text-base">
                                Have a story, insight, or research to share? We welcome guest contributors and collaborative content.
                            </p>
                        </CardContent>
                        <CardFooter className="mt-4 gap-4 px-0">
                            <Link href={`/contact`} prefetch>
                                <Button>Submit an Idea</Button>
                            </Link>
                            <Link href={`/contact`}>
                                <Button variant="outline">Partner With Us</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </CamActiveLayout>
    );
};

export default Company;
