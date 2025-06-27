import { Card, CardContent } from '@/components/ui/card';
import { UserCircle2Icon } from 'lucide-react';

const teamMembers = [
    { id: 1, name: 'Long Soeng', position: 'Full-Stack Developer' },
    { id: 2, name: 'Sok Dara', position: 'Project Manager' },
    { id: 3, name: 'Chan Rith', position: 'UX/UI Designer' },
    { id: 4, name: 'Pisey Neang', position: 'QA Engineer' },
    { id: 5, name: 'Sovann Ou', position: 'Frontend Developer' },
    { id: 6, name: 'Sreyleak Im', position: 'Backend Developer' },
    { id: 7, name: 'Davin Phan', position: 'DevOps Engineer' },
    { id: 8, name: 'Vannak Men', position: 'Product Owner' },
    { id: 9, name: 'Kanha Sou', position: 'Content Strategist' },
    { id: 10, name: 'Narith Chum', position: 'Mobile App Developer' },
    { id: 11, name: 'Chanda Sieng', position: 'UI/UX Researcher' },
    { id: 12, name: 'Bopha Khun', position: 'Marketing Specialist' },
];

const OurTeam = () => {
    return (
        <section className="relative my-20">
            <div className="mx-auto max-w-screen-xl space-y-8">
                <h2 className="px-6 text-3xl font-bold tracking-tight">Our Team</h2>
                <div className="grid grid-cols-2 gap-2 px-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {teamMembers.map((member) => (
                        <Card
                            key={member.id}
                            className="border-border/50 transform rounded-xl border-none transition-all duration-300 hover:scale-105"
                        >
                            <CardContent className="flex flex-col items-center space-y-3 px-0 py-0">
                                <div className="bg-primary/10 flex aspect-square w-20 items-center justify-center rounded-full">
                                    <UserCircle2Icon className="text-primary size-14" />
                                </div>
                                <h3 className="text-foreground text-lg font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.position}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
