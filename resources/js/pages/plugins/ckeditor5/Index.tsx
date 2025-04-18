import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { useState } from 'react';
import MyCkeditor5 from './my-ckeditor5';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sample Content',
        href: '/admin/ckeditor5',
    },
];
export default function Page() {
    const [data, setData] = useState(sampleData);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Tabs defaultValue="followers" className="w-full max-w-full lg:p-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="followers">Editor</TabsTrigger>
                    <TabsTrigger value="following">Preview</TabsTrigger>
                </TabsList>

                <div className="mt-2 rounded-md">
                    <TabsContent value="followers" className="z-[100]">
                        <div className="mx-auto flex h-full max-w-6xl items-center justify-center py-2">
                            <MyCkeditor5 data={data} setData={setData} />
                        </div>
                    </TabsContent>
                    <TabsContent value="following" className="prose ck-content max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: data }} />
                    </TabsContent>
                </div>
            </Tabs>
        </AppLayout>
    );
}

const sampleData = `<h2 class="document-title" id="ee5902976f4e49a36d08e025ae4a6206a">
    Handheld emperor
</h2>
<p>
    Nintendo, a Japanese electronics company, started as a <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Hanafuda"><i>hanafuda</i> cards</a> manufacturer in 1889. In the mid-1970s, they entered the early video games market and became famous for their home video and handheld game consoles. Nintendo introduced consoles like the <strong>NES</strong>, <strong>SNES</strong>, and <strong>Wii</strong>. But the most revolutionary was for sure the <strong>Game Boy</strong>.
</p>
<h3 class="document-subtitle" id="e4e3f661f4eb7ac23958829a3415654d5">
    A countdown of Nintendo handhelds
</h3>
<ol>
    <li>
        <span style="color:hsl(0,75%,60%);"><strong>Game &amp; Watch</strong></span> was Nintendo's first product offering out-of-home gaming. From 1980 to 1991, over a hundred games were released, gaining great popularity.
    </li>
    <li>
        In 1989, &nbsp;the original <span style="color:hsl(0,75%,60%);"><strong>Game Boy</strong></span> was released. The amazing new machine utilized a cartridge system, allowing the users to play a multitude of games of all kinds. This was <mark class="marker-yellow">a historical game-changer</mark>. &nbsp;
        <ol>
            <li>
                It was followed by a number of versions, such as Game Boy Color or Game Boy Advance.
            </li>
        </ol>
    </li>
    <li>
        In 2004, Nintendo introduced a new console family called the <span style="color:hsl(0,75%,60%);"><strong>Nintendo DS</strong></span>. It sported a dual LCD screen in a folded shell, with the lower one being a touchscreen.
        <ol>
            <li>
                The most prominent development was Nintendo 3DS, which offered a 3D display.
            </li>
        </ol>
    </li>
    <li>
        2017 brought the hybrid experience for both couch-preferring gamers and handheld enthusiasts with the release of the <span style="color:hsl(0,75%,60%);"><strong>Nintendo Switch</strong></span>. It offers both a TV mode with high-definition graphics and a handheld mode using the built-in 6.2" display.&nbsp;
    </li>
</ol>
<h3 class="document-subtitle" id="edabaaf383ba61aeb11c42c4872731db0">
    Handheld consoles' popularity
</h3>
<p>
    While the most recent Switch is a prevalent choice nowadays, the 2DS and 3DS consoles are still popular. The king, however, is none other than the original wonder — the Game Boy.
</p>
<p>
    Games that can be played on the handheld family include (examples of games listed):
</p>
<ul>
    <li>
        Action &amp; adventure games
        <ul>
            <li>
                The <i>Legend of Zelda</i> series
            </li>
            <li>
                <i>Chrono Trigger</i>
            </li>
        </ul>
    </li>
    <li>
        First-person action games
        <ul>
            <li>
                <i>Splatoon</i>
            </li>
        </ul>
    </li>
    <li>
        Role-playing games (RPG)
        <ul>
            <li>
                The <i>Pokémon</i> series
            </li>
            <li>
                The <i>Final Fantasy</i> series
            </li>
        </ul>
    </li>
</ul>`;
