import { Button } from './ui/button';

const MyDialogCancelButton = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
    return (
        <Button className="mr-2" variant={`outline`} type='button' onClick={onClick}>
            Cancel
        </Button>
    );
};

export default MyDialogCancelButton;
