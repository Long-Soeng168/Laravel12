import { DribbbleIcon, GithubIcon, TwitchIcon, TwitterIcon } from 'lucide-react';

const Social = () => {
    return (
        <div>
            <div className="text-muted-foreground mt-6 flex space-x-3 text-sm">
                <a href="#" target="_blank">
                    <TwitterIcon className="size-8" />
                </a>
                <a href="#" target="_blank">
                    <DribbbleIcon className="size-8" />
                </a>
                <a href="#" target="_blank">
                    <TwitchIcon className="size-8" />
                </a>
                <a href="#" target="_blank">
                    <GithubIcon className="size-8" />
                </a>
            </div>
        </div>
    );
};

export default Social;
