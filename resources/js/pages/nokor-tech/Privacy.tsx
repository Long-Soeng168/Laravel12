'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import NokorTechLayout from './layouts/nokor-tech-layout';

const Privacy = () => {
    return (
        <NokorTechLayout>
            <div className="mx-auto max-w-4xl space-y-8 p-8">
                {/* Header */}
                <header className="space-y-2 text-center">
                    <h1 className="text-foreground text-4xl font-bold">Privacy Policy</h1>
                    <p className="text-muted-foreground text-lg">Last updated: 25-May-2025</p>
                </header>

                <Separator className="my-6" />

                <main className="space-y-6">
                    {/* Introduction */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-foreground text-2xl font-semibold">Introduction</h2>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            Welcome to our e-commerce automotive application. Your privacy is of utmost importance to us. This Privacy Policy outlines
                            the information we collect, why we collect it, and how it is handled.
                        </CardContent>
                    </Card>

                    {/* Information We Collect */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-foreground text-2xl font-semibold">Information We Collect</h2>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-4 leading-relaxed">
                            <p>To enable login and registration, we collect the following user data:</p>
                            <ul className="list-inside list-disc space-y-2">
                                <li>
                                    <strong className="text-foreground">Name:</strong> Optional for a personalized experience.
                                </li>
                                <li>
                                    <strong className="text-foreground">Email Address:</strong> Used for account identification and communication.
                                </li>
                                <li>
                                    <strong className="text-foreground">Password:</strong> Securely stored using encryption techniques.
                                </li>
                                <li>
                                    <strong className="text-foreground">Phone Number:</strong> Used for account verification and important
                                    notifications.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* How We Use Your Information */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-foreground text-2xl font-semibold">How We Use Your Information</h2>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-4 leading-relaxed">
                            <p>We use the collected data for the following purposes:</p>
                            <ul className="list-inside list-disc space-y-2">
                                <li>To provide and maintain access to your account.</li>
                                <li>To personalize your user experience within the app.</li>
                                <li>To communicate important updates about our app or your account.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Data Security */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-foreground text-2xl font-semibold">Data Security</h2>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            We take your data security seriously. All sensitive information, such as passwords, is encrypted and stored securely. We
                            follow industry-standard practices to prevent unauthorized access, alteration, or misuse of your data.
                        </CardContent>
                    </Card>

                    {/* Privacy Rights */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-foreground text-2xl font-semibold">Your Privacy Rights</h2>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            You have full control over your account and data. If you wish to update, delete, or request a copy of your information,
                            please contact us at the email address below.
                        </CardContent>
                    </Card>

                    {/* Contact */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-foreground text-2xl font-semibold">Contact Us</h2>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-4 leading-relaxed">
                            <p>If you have any questions or concerns about our Privacy Policy, please feel free to reach out:</p>
                            <p>
                                Email:{' '}
                                <a href="mailto:longsoeng017@gmail.com" className="text-primary font-medium hover:underline">
                                    longsoeng017@gmail.com
                                </a>
                            </p>
                        </CardContent>
                    </Card>
                </main>

                <Separator className="my-8" />

                <footer className="text-muted-foreground text-center text-sm">© 2025 ATA Automotive E-Commerce. All rights reserved.</footer>
            </div>
        </NokorTechLayout>
    );
};

export default Privacy;
