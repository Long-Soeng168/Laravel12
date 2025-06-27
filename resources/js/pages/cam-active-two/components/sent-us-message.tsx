import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const SendUsMessage = () => {
    return (
        <div className="mt-4 space-y-4">
            <div className="w-full max-w-full">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="name" className="mt-0.5" />
            </div>
            <div className="w-full max-w-full">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" className="mt-0.5" />
            </div>
            <div className="w-full max-w-full">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="subject" className="mt-0.5" />
            </div>
            <div className="flex w-full flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here." />
            </div>
            <Button className="w-full">Submit</Button>
        </div>
    );
};

export default SendUsMessage;
