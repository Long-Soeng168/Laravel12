import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from '@inertiajs/react';

const caseStudies = [
    {
        id: 1,
        image: 'digital-learning.png',
        title: 'Digital Learning in Rural Schools',
        short_description:
            'In partnership with local educators, we introduced tablet-based learning in remote areas, improving student engagement and test scores by over 40%.',
        long_description: `
      <p>Access to quality education remains a challenge in remote regions. In response, we partnered with local schools to pilot a <strong>tablet-based learning initiative</strong>. Over the course of six months, students were provided with digital learning resources tailored to their curriculum.</p>
      <p>Key outcomes included:</p>
      <ul>
        <li>Student engagement increased by <strong>over 40%</strong>.</li>
        <li>Teachers reported a <strong>30% improvement in lesson efficiency</strong>.</li>
        <li>The initiative fostered collaboration between educators and parents, strengthening community involvement in education.</li>
      </ul>
      <p>Following its success, the program is now being scaled to neighboring districts, with ongoing training for teachers and regular content updates.</p>
    `,
    },
    {
        id: 2,
        image: 'supply-chain.png',
        title: 'Efficient Supply Chains for NGOs',
        short_description: 'We helped streamline logistics for a major NGO, reducing delivery times by 60% and cutting costs by 25%.',
        long_description: `
      <p>Many NGOs struggle with complex logistics, leading to delays in aid delivery and increased operational costs. We collaborated with a prominent NGO to <strong>optimize their supply chain processes</strong>.</p>
      <p>The project involved:</p>
      <ul>
        <li>Analyzing existing workflows and identifying bottlenecks.</li>
        <li>Introducing a centralized digital inventory and order management system.</li>
        <li>Partnering with reliable local suppliers and transport services.</li>
      </ul>
      <p>As a result, delivery times were cut by <strong>60%</strong>, operational expenses decreased by <strong>25%</strong>, and the NGO reported improved service reliability. The digital system also provided real-time insights into inventory levels, reducing waste and overstocking.</p>
    `,
    },
    {
        id: 3,
        image: 'people.png',
        title: 'Building Bridges Between Sectors',
        short_description:
            'Our partnership-building workshops brought together educators, government officials, and suppliers to co-design scalable education programs.',
        long_description: `
      <p>To address systemic challenges in the education sector, we hosted a series of <strong>multi-stakeholder workshops</strong> aimed at fostering collaboration between diverse groups including government agencies, schools, NGOs, and private suppliers.</p>
      <p>Highlights of the initiative:</p>
      <ul>
        <li>Facilitated open dialogue to identify shared challenges and opportunities.</li>
        <li>Co-developed scalable solutions, including a joint education program framework.</li>
        <li>Established ongoing partnerships for resource sharing and joint initiatives.</li>
      </ul>
      <p>This initiative not only <strong>improved cross-sector communication</strong> but also led to the creation of a regional education alliance, which continues to work on improving educational access and quality in underserved areas.</p>
    `,
    },
];

const StoryFromTheField = () => {
    return (
        <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start gap-12 px-6 lg:flex-row">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Stories from the Field</h2>

                <div className="mt-4 space-y-4">
                    {caseStudies.map((item) => (
                        <Dialog>
                            <DialogTrigger>
                                <Card
                                    key={item.id}
                                    className="bg-primary/10 flex cursor-pointer flex-row gap-0 overflow-hidden rounded-xl border border-none border-gray-200 text-start shadow-none transition-all duration-300 hover:scale-105 sm:flex-row"
                                >
                                    <CardHeader>
                                        <div className="aspect-square size-20 rounded-lg">
                                            <img
                                                src={`/assets/cam-active/stories-from-the-field/${item.image}`}
                                                className="size-20 shrink-0 object-contain"
                                                alt=""
                                            />
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex flex-col justify-center p-0 pr-4">
                                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-foreground mt-2 line-clamp-3 text-xs lg:text-sm">{item.short_description}</p>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>
                            <DialogContent showCloseButton={true}>
                                <DialogHeader>
                                    <DialogTitle>
                                        <div className="flex shrink-0 justify-center rounded-lg md:justify-start">
                                            <img
                                                src={`/assets/cam-active/stories-from-the-field/${item.image}`}
                                                className="mb-2 size-20 shrink-0 object-contain"
                                                alt=""
                                            />
                                        </div>
                                        {/* <div className="mb-2 flex justify-center sm:justify-start">{item.icon}</div> */}
                                        <p className="text-xl">{item.title}</p>
                                    </DialogTitle>
                                    <DialogDescription>
                                        <p className="text-foreground text-base">{item.short_description}</p>
                                        <p className="prose text-foreground" dangerouslySetInnerHTML={{ __html: item.long_description }}></p>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
            <aside className="w-full shrink-0 lg:max-w-lg">
                <h3 className="text-3xl font-bold tracking-tight">Voices of Impact</h3>
                <div className="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                    {[0, 1].map((i) => (
                        <Card
                            key={i}
                            className="flex flex-row gap-4 overflow-hidden rounded-xl border border-none border-gray-200 p-2 shadow-none transition sm:flex-row"
                        >
                            <CardHeader className="px-0">
                                <div className="flex shrink-0 justify-center rounded-lg md:justify-start">
                                    <img src={`/assets/icons/user.png`} className="mb-2 size-14 shrink-0 object-contain" alt="" />
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-col justify-center p-0">
                                <p className="text-foreground text-base whitespace-pre-line">
                                    “Cam-Active helped us rethink how we deliver education. Their team is responsive, innovative, and deeply
                                    committed.”
                                    <span className="block"> — NGO Program Manager</span>
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Card className="bg-primary/10 mt-8 flex flex-col gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-6 shadow-none transition sm:flex-col">
                    <CardContent className="flex flex-col justify-center p-0">
                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">What’s Next</h3>
                        <p className="text-foreground mt-2 text-sm lg:text-base">
                            We're expanding our reach, deepening our partnerships, and exploring new ways to use technology and collaboration to drive
                            impact.
                        </p>
                    </CardContent>
                    <CardFooter className="mt-4 gap-4 px-0">
                        <Link href={`/contact`} prefetch>
                            <Button>Partner With Us</Button>
                        </Link>
                        <Link href={`/careers`}>
                            <Button variant="outline">Join Our Team</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </aside>
        </div>
    );
};

export default StoryFromTheField;
