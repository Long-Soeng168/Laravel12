import {
  Star,
  Globe,
  Sparkles,
  Users,
  LifeBuoy,
} from 'lucide-react';

const commitments = [
  {
    icon: Star,
    title: 'Quality',
    description:
      'We are steadfast in delivering world-class educational resources and services that exceed expectations.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description:
      'We firmly believe that quality education should be within reach for every learner, everywhere.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description:
      'We are relentless in pursuing fresh ideas and modern solutions that transform learning experiences.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We deeply value collaboration, fostering meaningful relationships that drive educational advancement.',
  },
  {
    icon: LifeBuoy,
    title: 'Support',
    description:
      'We are passionately committed to providing comprehensive support that empowers institutions and learners alike.',
  },
];

const OurCommitment = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight text-gray-800 leading-tight">
        Our Commitment
          {/* Anchored in Values, Driven by Purpose */}
        </h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          At CamActive, our unwavering commitment to excellence is guided by these core values:
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden outline-[1px] outline-background outline-offset-[-1px]">
          {commitments.map(({ title, description, icon: Icon }) => (
            <div key={title} className="border p-6 -mt-px -ml-px bg-white">
              <div className="h-11 w-11 flex items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="w-5 h-5" />
              </div>
              <div className="mt-4 mb-2 flex items-start gap-2 text-[1.35rem] font-semibold tracking-tight text-gray-800">
                <span>{title}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
