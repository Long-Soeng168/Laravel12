import MyDialogCloseButton from '@/components/my-dialog-close-button';
import { MyTooltipButton } from '@/components/my-tooltip-button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { EditIcon } from 'lucide-react';
import { useState } from 'react';
import Create from '../Create';

const EditButton = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog modal={false} open={isOpen}>
            <DialogTrigger asChild>
                <MyTooltipButton variant="ghost" title='Edit' side='bottom' className="text-foreground" size="icon" onClick={() => setIsOpen(true)}>
                    <EditIcon />
                </MyTooltipButton>
            </DialogTrigger>
            {isOpen && <div className="fixed inset-0 z-40 bg-black/80" />}
            <DialogContent>
                <MyDialogCloseButton onClick={() => setIsOpen(false)} />

                <DialogHeader>
                    <DialogTitle>Edit Heading</DialogTitle>
                    <DialogDescription className="hidden"></DialogDescription>
                    <Create editData={item} setIsOpen={setIsOpen} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default EditButton;
