import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowUpRightIcon } from 'lucide-react';
import NokorTechLayout from './layouts/nokor-tech-layout';

const About = () => {
    return (
        <NokorTechLayout>
            <div className="text-foreground bg-background">
                {/* Main Content */}
                <main className="mx-auto max-w-7xl px-4 py-20">
                    {/* About */}
                    <section>
                        <div className="text-center">
                            <h2 className="text-foreground mb-6 text-4xl font-bold">About ATA Auto</h2>
                            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-400">
                                ATA Auto is your ultimate companion for all things automotive. Designed for car owners, auto engineers, garage
                                professionals, and passionate enthusiasts, our platform offers everything you need to maintain, repair, and enjoy your
                                vehicle to the fullest.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-card rounded-3xl p-8 shadow-xl">
                                <h3 className="text-card-foreground mb-2 text-2xl font-bold">🔧 Smart Tools & Decoders</h3>
                                <p className="text-gray-500">
                                    Instantly decode vehicle error codes, manage diagnostics, and access essential repair documentation — all in one
                                    place.
                                </p>
                            </div>

                            <div className="bg-card rounded-3xl p-8 shadow-xl">
                                <h3 className="text-card-foreground mb-2 text-2xl font-bold">🎓 Learn & Grow</h3>
                                <p className="text-gray-500">
                                    Boost your skills with curated automotive courses tailored for beginners, professionals, and enthusiasts alike.
                                </p>
                            </div>

                            <div className="bg-card rounded-3xl p-8 shadow-xl">
                                <h3 className="text-card-foreground mb-2 text-2xl font-bold">🛒 Product Marketplace</h3>
                                <p className="text-gray-500">
                                    Discover top-quality automotive products, tools, and accessories carefully selected for performance and
                                    reliability.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <p className="mx-auto max-w-3xl text-lg text-gray-400">
                                Whether you're fixing your car, upgrading your skills, or managing a garage — ATA Auto is built to support your
                                journey. Join our community and experience a smarter, more connected automotive world.
                            </p>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="my-20 text-center">
                        <h2 className="text-foreground mb-4 text-4xl font-bold">Why Choose Us?</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-500">
                            Everything you need for your automotive journey — from shopping and learning to decoding and repairs.
                        </p>
                    </section>

                    {/* Features */}
                    <section className="mb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: '🛠️ Shop Products',
                                desc: 'Top-quality automotive tools, parts & accessories for every car enthusiast or garage.',
                            },
                            { title: '🎓 Learn & Grow', desc: 'Expert-crafted courses to boost your diagnostic and repair skills.' },
                            { title: '🚦 DTC Decoder', desc: 'Decode vehicle error codes instantly and fix issues fast.' },
                            { title: '📄 Docs & Manuals', desc: 'Access essential automotive guides, manuals and repair docs anywhere.' },
                            { title: '🏪 Garage Finder', desc: 'Find trusted garages with real reviews, services & ratings near you.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-card transform rounded-3xl p-8 shadow-xl transition hover:scale-105">
                                <h3 className="text-card-foreground mb-2 text-2xl font-bold">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </section>

                    {/* Audience */}
                    <section className="mb-20 text-center">
                        <h2 className="text-foreground mb-6 text-4xl font-bold">Built for Everyone</h2>
                        <div className="mx-auto max-w-3xl space-y-4 text-left text-gray-400">
                            {[
                                ['🚗 Car Owners:', 'Stay ahead with smart tools for maintenance & error checking.'],
                                ['👨‍🔧 Auto Engineers:', 'Take your skills further with industry-focused learning.'],
                                ['🏭 Garage Owners:', 'Manage smarter, reach more customers & grow.'],
                                ['💡 Car Enthusiasts:', 'Dive deep into tools, docs & your passion for cars.'],
                            ].map(([label, text], idx) => (
                                <p key={idx}>
                                    <span className="text-foreground font-semibold">{label}</span> {text}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="bg-card mb-20 rounded-3xl p-12 text-center">
                        <h2 className="text-card-foreground mb-6 text-4xl font-bold">Get in Touch</h2>
                        <p className="mb-4">We'd love to hear from you. Reach out through any of the channels below.</p>
                        <div className="space-y-3 text-lg text-gray-400">
                            <p>
                                <strong>📞 Phone:</strong>{' '}
                                <a href="tel:061561154" className="hover:underline">
                                    061561154
                                </a>
                            </p>
                            <p>
                                <strong>📧 Email:</strong>{' '}
                                <a href="mailto:longsoeng017@gmail.com" className="hover:underline">
                                    longsoeng017@gmail.com
                                </a>
                            </p>
                            <p>
                                <strong>💬 Telegram:</strong>{' '}
                                <a href="https://t.me/longsoeng" target="_blank" rel="noreferrer" className="hover:underline">
                                    https://t.me/longsoeng
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Privacy Policy */}
                    <section className="mb-20 rounded-3xl p-12 text-center">
                        <h2 className="text-foreground mb-6 text-4xl font-bold">Privacy Policy</h2>
                        <div className="text-foreground mx-auto max-w-3xl space-y-4 text-left">
                            <p>
                                We respect your privacy and are committed to protecting your personal data. Any information you share with us — such
                                as your email or contact details — will only be used to improve your experience and keep you informed.
                            </p>
                            <p>We do not share or sell your data to third parties. Your trust is important to us, and we take security seriously.</p>
                            <p>
                                By using our app or subscribing to our services, you agree to our data practices as outlined here. For questions or
                                concerns, feel free to{' '}
                                <a href="/contact-us" className="text-primary underline">
                                    contact us
                                </a>
                                .
                            </p>
                            <Link href={`/privacy`} prefetch>
                                <Button variant="outline" size="lg">
                                    More about privacy <ArrowUpRightIcon />
                                </Button>
                            </Link>
                        </div>
                    </section>

                    {/* Download Call-to-Action */}
                    <section className="text-center">
                        <h2 className="text-foreground mb-4 text-4xl font-bold">Get Started Now</h2>
                        <p className="mb-6 text-gray-500">Download the app and drive your automotive knowledge forward.</p>
                        <Link
                            href="/download-app"
                            prefetch
                            className="from-true-primary hover:from-true-primary rounded-full bg-gradient-to-r to-purple-600 px-10 py-4 font-semibold text-white transition hover:to-purple-700"
                        >
                            Download the App
                        </Link>
                    </section>
                </main>
            </div>
        </NokorTechLayout>
    );
};

export default About;
