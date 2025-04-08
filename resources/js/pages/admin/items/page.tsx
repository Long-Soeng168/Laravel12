import AppLayout from '@/layouts/app-layout';
import MyDialog from './my-dialog';
import MyForm from './my-form';

const Page = () => {
    return (
        <AppLayout>
            <MyDialog />
            <MyForm />
            {/* <div>Hello</div> */}
        </AppLayout>
    );
};

export default Page;
