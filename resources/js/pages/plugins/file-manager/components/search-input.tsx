import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useFileManager } from '../hooks/FileManagerContext';

export default function SearchInput() {
    const { getFileData,setPage, search, setSearch } = useFileManager();

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            setPage(1),
            getFileData();
        }, 500); // debounce time in ms

        return () => clearTimeout(delayDebounce); // cleanup
    }, [search]);

    return (
        <div className="flex w-full max-w-xl items-center space-x-2 rounded-xl border p-1">
            <Input
                value={search}
                type="search"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                className="ml-0.5 min-w-auto rounded-sm border-none shadow-none"
                placeholder="Search..."
            />
            <Button variant="outline" type="submit" onClick={() => getFileData()}>
                <SearchIcon className="[&_svg]:size-2" /> <span className='hidden lg:inline'>Search</span>
            </Button>
        </div>
    );
}
