import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { ChevronRightIcon } from 'lucide-react';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Show = () => {
    const post = {
        title: 'How Digital Solutions Are Transforming Cambodian Education',
        images: [{ image: 'sample-post.jpg' }],
        long_description: `
  <h2>Sample Content</h2>
  <p>
    Over the past decade, Cambodia has witnessed remarkable advancements in education technology, with digital solutions reshaping classrooms, empowering teachers, and increasing learning opportunities for students in both urban and rural areas. As digital infrastructure improves and mobile penetration rises, a new wave of initiatives is bridging the education gap across the country.
  </p>

  <h2>Why Digital Tools Matter</h2>
  <p>
    Digital learning platforms and applications have made it possible for educators to deliver interactive, accessible, and inclusive lessons to students who might otherwise lack access to quality resources. With over <strong>70% of Cambodians under the age of 35</strong>, investing in scalable, digital-first educational initiatives is critical for national development.
  </p>

  <blockquote>
    <p>"Education is the most powerful weapon which you can use to change the world." – Nelson Mandela</p>
  </blockquote>

  <h3>Key Benefits of Digital Learning</h3>
  <ul>
    <li>Expands access to educational materials and courses beyond physical classrooms.</li>
    <li>Supports remote and hybrid learning models, especially in rural provinces.</li>
    <li>Enables personalized learning paths and interactive multimedia content.</li>
    <li>Improves teacher training through online workshops and peer collaboration.</li>
  </ul>

  <h2>Case Study: Digital Learning in Kampong Cham</h2>
  <p>
    In 2023, a pilot program was launched in Kampong Cham province to introduce tablet-based learning in 15 primary schools. The project equipped classrooms with tablets preloaded with Khmer-language learning apps, digital storybooks, and educational games. Teachers received training on using digital tools to supplement traditional teaching methods.
  </p>

  <img src="/assets/images/posts/sample-case-study.jpg" alt="Tablet Learning in Kampong Cham" style="border-radius: 8px; margin: 20px 0;" />

  <p>
    Within six months, schools reported a <strong>40% increase in student engagement</strong> and a significant improvement in literacy and numeracy test scores. Teachers noted that students were more motivated and participated actively in class discussions.
  </p>

  <h2>The Road Ahead</h2>
  <p>
    While progress has been promising, challenges remain. Infrastructure limitations in remote areas, digital literacy among older educators, and the cost of devices continue to present barriers. Collaborative efforts between government agencies, NGOs, private sector partners, and local communities are essential to scaling these solutions equitably.
  </p>

  <h3>Next Steps</h3>
  <ul>
    <li>Expand digital literacy training for teachers nationwide.</li>
    <li>Develop localized, culturally relevant e-learning content in Khmer.</li>
    <li>Improve internet connectivity in underserved provinces.</li>
    <li>Foster public-private partnerships to support device affordability.</li>
  </ul>

  <p>
    By embracing technology thoughtfully and inclusively, Cambodia has the opportunity to leapfrog traditional barriers to education and equip its youth with the skills necessary for a modern, knowledge-based economy.
  </p>

  <h2>Conclusion</h2>
  <p>
    Digital transformation in Cambodian education is not just a trend — it’s a necessity. With strategic investment and community-driven innovation, the nation can build a more resilient, inclusive, and equitable education system for generations to come.
  </p>
`,
    };

    const relatedPosts = [
        {
            id: 1,
            title: 'Boosting Learning with Mobile Apps',
            images: [{ image: 'related-1.jpg' }],
            short_description:
                'How Digital Solutions Are Transforming Cambodian Education. How Digital Solutions Are Transforming Cambodian Education',
            category: { name: 'Technology' },
            post_date: '2024-06-01',
        },
        {
            id: 2,
            title: 'Bringing Innovation to Remote Schools',
            images: [{ image: 'related-2.jpg' }],
            short_description:
                'How Digital Solutions Are Transforming Cambodian Education. How Digital Solutions Are Transforming Cambodian Education',
            category: { name: 'Innovation' },
            post_date: '2024-05-20',
        },
    ];

    const postCategories = [
        {
            code: 'impact-report',
            name: 'Annual Impact Report 2024',
            image: 'category-impact-report.png',
            posts_count: 4,
        },
        {
            code: 'toolkits-guides',
            name: 'Toolkits & Guides',
            image: 'category-toolkits-guides.png',
            posts_count: 6,
        },
        {
            code: 'policy-briefs',
            name: 'Policy Briefs',
            image: 'category-policy-briefs.png',
            posts_count: 2,
        },
    ];

    return (
        <CamActiveLayout>
            <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-12 px-6 py-6 lg:flex-row lg:py-8 xl:px-6">
                <div>
                    <h3 className="mb-8 text-2xl font-semibold lg:text-4xl">{post.title}</h3>
                    {/* <img
                        className="mb-4 h-full max-h-[600px] w-full rounded-xl object-cover"
                        src={`/assets/images/posts/${post.images[0].image}`}
                        alt=""
                    /> */}
                    <div className="flex aspect-video overflow-hidden w-full shrink-0 justify-center rounded-lg md:justify-start">
                        <img src={`/assets/cam-active/posts/image2.jpg`} className="mb-2 size-full shrink-0 object-cover" alt="" />
                    </div>
                    <div className="prose ck-content max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: post.long_description }} />
                    </div>

                    <h2 className="mt-20 text-3xl font-bold tracking-tight">Related</h2>

                    <div className="mt-4 space-y-12">
                        {relatedPosts.map((item, i) => (
                            <Link href={`/posts/${item.id}`} key={i}>
                                <Card className="flex flex-col overflow-hidden rounded-md border-none shadow-none sm:flex-row sm:items-center">
                                    {/* <CardHeader className="px-0 sm:p-0">
                                        <div className="bg-muted aspect-video rounded-lg sm:w-64">
                                            <img
                                                className="h-full max-h-[600px] w-full rounded-md object-cover"
                                                src={`/assets/images/posts/thumb/${item.images[0].image}`}
                                                alt=""
                                            />
                                        </div>
                                    </CardHeader> */}
                                    <CardHeader className="p-0">
                                        <div className="bg-muted aspect-video w-52 rounded-md border-b" />
                                    </CardHeader>
                                    <CardContent className="flex flex-col px-0 py-0 sm:px-4">
                                        <h3 className="line-clamp-2 text-2xl font-semibold tracking-tight">{item.title}</h3>
                                        <p className="text-muted-foreground mt-2 line-clamp-3">{item.short_description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>

                <aside className="sticky top-8 w-full shrink-0 lg:max-w-sm">
                    <h3 className="text-3xl font-bold tracking-tight">Categories</h3>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                        {postCategories.map((category, i) => (
                            <Link
                                href={`/posts?category_code=${category.code}`}
                                key={i}
                                className="bg-primary/5 hover:bg-primary/10 flex cursor-pointer items-center justify-between gap-2 rounded-md p-3"
                            >
                                <div className="flex items-center gap-3">
                                    {/* <img className="size-6" src={`/assets/images/post_categories/thumb/${category.image}`} alt="" /> */}
                                    <div className="bg-primary/20 flex aspect-square w-8 shrink-0 items-center justify-center rounded-full shadow-md lg:w-8">
                                        <ChevronRightIcon className="text-primary size-6" />
                                    </div>
                                    <span className="font-medium">{category.name}</span>
                                </div>
                                {/* <Badge className="min-h-6 min-w-6 rounded-full px-1.5">{category.posts_count}</Badge> */}
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </CamActiveLayout>
    );
};

export default Show;
