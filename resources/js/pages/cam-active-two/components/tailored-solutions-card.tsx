import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';

export default function TailoredSolutionsCard() {
    return (
        <Card className="max-w-lg text-center mx-4 bg-primary/10 border-none">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Tailored Solutions</CardTitle>
                <CardDescription className='text-base text-foreground'>
                    Every challenge is unique. We offer custom consulting and implementation support to meet your specific needs.
                </CardDescription>
            </CardHeader>
            <CardFooter className="mt-2 flex justify-center">
                <Link href={`/contact`}>
                    <Button size="lg" className="w-full">
                        Contact Us
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
