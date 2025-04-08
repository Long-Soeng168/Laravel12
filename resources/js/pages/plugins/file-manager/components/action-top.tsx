import { MyTooltipButton } from '@/components/my-tooltip-button';
import { FilePlus2Icon, FolderPlusIcon } from 'lucide-react';

const ActionTop = ({ setOpenUploadFileDialog, setOpenAddFolderDialog }) => {
    return (
        <>
            <MyTooltipButton title="Upload Files" variant={`outline`} size={`icon`} onClick={() => setOpenUploadFileDialog(true)}>
                <FilePlus2Icon className="stroke-primary" />
            </MyTooltipButton>

            <MyTooltipButton title="Add Sub-Folder" variant={`outline`} size={`icon`} onClick={() => setOpenAddFolderDialog(true)}>
                <FolderPlusIcon className="stroke-warning" />
            </MyTooltipButton>
        </>
    );
};

export default ActionTop;
