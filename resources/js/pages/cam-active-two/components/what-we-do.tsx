import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
const services = [
    {
        id: 1,
        image: 'educations.png',
        title: 'Educational Solutions',
        description:
            'From curriculum development to digital learning tools, we help schools, NGOs, and government bodies deliver quality education that works.',
        long_description: `
What we offer:

•	Curriculum design and teacher training
•	Digital learning platforms and content
•	Programme monitoring and evaluation
•	Community-based educational initiatives

“We don’t just deliver content—we co-create learning experiences that stick.”
`,
    },
    {
        id: 2,
        image: 'logistics.png',
        title: 'Logistics Support',
        description: 'We streamline supply chains for educational programs—getting the right materials to the right places, on time and on budget.',
        long_description: `
Our logistics services cover:

•	Procurement and supply chain management
•	Warehousing and inventory tracking
•	Last-mile delivery to schools and communities
•	Real-time reporting and logistics dashboards

“From textbooks to tablets, we move what matters.”
`,
    },
    {
        id: 3,
        image: 'partners.png',
        title: 'Partnership Building',
        description: 'We connect stakeholders across sectors to collaborate, innovate, and scale impact.',
        long_description: `
We help you:
•	Identify and engage with aligned partners
•	Design and manage joint initiatives
•	Facilitate workshops and knowledge-sharing events
•	Build networks that last

“We’re not just connectors—we’re collaborators.”
`,
    },
];

const WhatWeDo = () => {
    return (
        <section className="relative pb-20">
            <div className="mx-auto max-w-screen-xl space-y-8 text-center">
                <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((item) => (
                        <Dialog>
                            <DialogTrigger>
                                <Card
                                    key={item.id}
                                    className="dark:bg-primary/15 border-border/50 transform cursor-pointer rounded-xl border shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    <CardContent className="flex flex-col items-center space-y-4 py-0 text-center">
                                        <div className="flex shrink-0 justify-center rounded-lg md:justify-start">
                                            <img
                                                src={`/assets/cam-active/what-we-do/${item.image}`}
                                                className="mb-2 size-20 shrink-0 object-contain"
                                                alt=""
                                            />
                                        </div>
                                        <h3 className="text-foreground text-2xl font-semibold">{item.title}</h3>
                                        <p className="line-clamp-3 text-lg text-gray-500">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>
                            <DialogContent showCloseButton={true}>
                                <DialogHeader>
                                    <DialogTitle>
                                        <div className="flex shrink-0 justify-center rounded-lg md:justify-start">
                                            <img
                                                src={`/assets/cam-active/what-we-do/${item.image}`}
                                                className="mb-2 size-20 shrink-0 object-contain"
                                                alt=""
                                            />
                                        </div>
                                        <p className="text-xl">{item.title}</p>
                                    </DialogTitle>
                                    <DialogDescription>
                                        <p className="text-foreground text-base">{item.description}</p>
                                        <p className="prose text-foreground text-base whitespace-pre-line">{item.long_description}</p>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
