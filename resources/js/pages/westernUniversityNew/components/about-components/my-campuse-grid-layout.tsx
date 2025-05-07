import { LayoutGrid } from '../ui/layout-grid';

export function MyCampuseGridLayout() {
    return (
        <>
            <div className="flex w-full flex-col items-center justify-center pt-20">
                <h1 className="font-noto-san-extra-light text-4xl !leading-[1.2] font-bold md:text-5xl lg:text-[2.75rem] xl:text-5xl">Our Hestory</h1>
                <div className="my-10 w-15 border-[1.5px] border-black" />
            </div>
            <div className="h-[200vh] w-full pb-20">
                <LayoutGrid cards={cards} />
            </div>
        </>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className="text-xl font-bold text-white md:text-4xl">Stadium (Main Campus)</p>
            <p className="text-base font-normal text-white"></p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
                ADDRESS: #20, St. 598C, Phnom Penh Thmey, Sen Sok, Phnom Penh, Cambodia.
            </p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">TEL : 016 699 192 / 078 672 072 / 097 886 0979</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">E-mail: info@western.edu.kh</p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="text-xl font-bold text-white md:text-4xl">Sunway Campus( Grade 6 to 9)</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">#46, St. 337 Boeung Kak II, Toul Kork, Phnom Penh, Cambodia</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">TEL : 078 672 074 / 098 966 786 / 097 886 0052</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">E-mail : info@western.edu.kh</p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="text-xl font-bold text-white md:text-4xl">Northwest Campus</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">ADDRESS : #21, St. 315, Boeungkak I, Toul Kork, Phnom Penh.</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">TEL : 097 2110 677 / 078 672 073 / 015 990 895</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">E-mail: info@western.edu.kh</p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="text-xl font-bold text-white md:text-4xl">Plaza Campus</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">ADDRESS : #3, St. 289, Boeungkak I, Toul Kork, Phnom Penh.</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">TEL : 097 2110 788 / 078 672 068 / 016 887 699</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">E-mail: info@western.edu.kh</p>
        </div>
    );
};
const Skeleton5 = () => {
    return (
        <div>
            <p className="text-xl font-bold text-white md:text-4xl">Boeung Kak Campus</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">ADDRESS : #3, St. 289, Boeungkak I, Toul Kork, Phnom Penh.</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">TEL : 097 2110 788 / 078 672 068 / 016 887 699</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">E-mail : info@western.edu.kh</p>
        </div>
    );
};
const Skeleton6 = () => {
    return (
        <div>
            <p className="text-xl font-bold text-white md:text-4xl">Boeung Kak Campus</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">ADDRESS : Phum 12, St. 283, Boeung Kak 1, Toul Kork, Phnom Penh.</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200"> TEL : 097 2112 820 / 078 672 067 / 016 699 195</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">E-mail : info@western.edu.kh</p>
        </div>
    );
};

const Skeleton7 = () => {
    return (
        <div>
            <p className="text-xl font-bold text-white md:text-4xl">De Castle Campus</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">ADDRESS : #35, St. 315, Boeungkak I, Toul Kork, Phnom Penh.</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">TEL : 097 2112 875 / 078 672 071 / 016 699 196</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">E-mail : info@western.edu.kh</p>
        </div>
    );
};
const Skeleton8 = () => {
    return (
        <div>
            <p className="text-xl font-bold text-white md:text-4xl">Toul Sangke Branch</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">ADDRESS: #30K, St 777 Corner 103, Toul Sangke 2, Russey Keo.</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200"> TEL : 081 96 67 88/ 061 96 67 88 / 097 886 8469</p>
            <p className="my-4 max-w-lg text-base font-normal text-neutral-200">E-mail : info@western.edu.kh</p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: 'md:col-span-2',
        thumbnail:
            '/assets/demo-images/Homepage/03_welcome_to_western_1.jpg',
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: 'col-span-1',
        thumbnail:
            '/assets/demo-images/Homepage/03_welcome_to_western_1.jpg',
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: 'col-span-1',
        thumbnail:
            '/assets/demo-images/Homepage/03_welcome_to_western_1.jpg',
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: 'md:col-span-2',
        thumbnail:
            '/assets/demo-images/Homepage/03_welcome_to_western_1.jpg',
    },
    {
        id: 5,
        content: <Skeleton5 />,
        className: 'md:col-span-2',
        thumbnail:
            '/assets/demo-images/Homepage/03_welcome_to_western_1.jpg',
    },
    {
        id: 6,
        content: <Skeleton6 />,
        className: 'col-span-1',
        thumbnail:
            '/assets/demo-images/Homepage/03_welcome_to_western_1.jpg',
    },
    {
        id: 7,
        content: <Skeleton7 />,
        className: 'col-span-1',
        thumbnail:
            '/assets/demo-images/Homepage/03_welcome_to_western_1.jpg',
    },
    {
        id: 8,
        content: <Skeleton8 />,
        className: 'col-span-2',
        thumbnail:
            '/assets/demo-images/Homepage/03_welcome_to_western_1.jpg',
    },

];
