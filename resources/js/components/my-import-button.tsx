import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DownloadCloud, FileDownIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import MyImportForm from './my-import-form';
export function MyImportButton() {
    const [isOpen, setIsOpen] = useState(false);
    const urlDownloadSampleExel = '#';
    return (
        <Dialog modal={false} open={isOpen}>
            <DialogTrigger asChild>
                <TooltipProvider delayDuration={300}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="rounded-xl border p-1">
                                <Button onClick={() => setIsOpen(true)} type="submit" variant="outline" size="icon" className="relative p-5">
                                    <FileDownIcon />
                                </Button>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>Import Data</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </DialogTrigger>
            {isOpen && <div className="fixed inset-0 z-40 bg-black/80" />}
            {/* Custom dark background */}
            <DialogContent className="z-50">
                <Button className={`absolute top-4 right-4 z-50`} variant={`outline`} size={`icon`} onClick={() => setIsOpen(false)}>
                    <XIcon />
                </Button>

                <DialogHeader>
                    <DialogTitle>Import Data</DialogTitle>
                    <DialogDescription className="hidden"></DialogDescription>
                    <a href={urlDownloadSampleExel}>
                        <Button
                            variant="secondary"
                            className="px-4 duration-200rounded-md border border-black bg-white py-2 text-sm text-black transition hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
                        >
                            <DownloadCloud />
                            Dowload Sample Excel
                        </Button>
                    </a>
                    <MyImportForm />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
