import { GithubIcon, TwitchIcon } from 'lucide-react';

const Social = () => {
    return (
        <div>
            <div className="text-muted-foreground mt-6 flex space-x-3 text-sm">
                <a href="www.facebook.com/camactivenet" target="_blank">
                    <div className="flex size-10 shrink-0 justify-center rounded-lg md:justify-start">
                        <img src={`/assets/icons/socials/facebook.png`} className="mb-2 size-10 shrink-0 object-contain" alt="" />
                    </div>
                </a>
                <a href="#" target="_blank">
                    <div className="flex size-10 shrink-0 justify-center rounded-lg md:justify-start">
                        <img src={`/assets/icons/socials/instagram.png`} className="mb-2 size-10 shrink-0 object-contain" alt="" />
                    </div>
                </a>
                <a href="#" target="_blank">
                    <div className="flex size-10 shrink-0 justify-center rounded-lg md:justify-start">
                        <img src={`/assets/icons/socials/linkedin.png`} className="mb-2 size-10 shrink-0 object-contain" alt="" />
                    </div>
                </a>
                <a href="#" target="_blank">
                    <div className="flex size-10 shrink-0 justify-center rounded-lg md:justify-start">
                        <img src={`/assets/icons/socials/youtube.png`} className="mb-2 size-10 shrink-0 object-contain" alt="" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Social;
