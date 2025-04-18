import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { router } from '@inertiajs/react';
import debounce from 'debounce';
import { SearchIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

export function MySearchTableData() {
    const initialQueryParams = new URLSearchParams(window.location.search);
    const [search, setSearch] = useState(initialQueryParams.get('search') || '');
    const currentPath = window.location.pathname; // Get dynamic path

    const handleSearch = useCallback(
        debounce((searchTerm) => {
            const queryParams = new URLSearchParams(window.location.search);
            queryParams.set('search', searchTerm);
            queryParams.set('page', '1');

            router.get(currentPath + '?' + queryParams.toString(), {}, { preserveState: true });
        }, 500),
        [currentPath], // Dependency ensures it updates if the path changes
    );

    return (
        <div className="flex w-full max-w-xl items-center space-x-2 rounded-xl border p-1">
            <Input
                defaultValue={search}
                type="search"
                onChange={(e) => {
                    setSearch(e.target.value);
                    handleSearch(e.target.value);
                }}
                className="ml-0.5 min-w-xs rounded-sm border-none shadow-none"
                placeholder="Search..."
            />
            <Button variant="outline" type="submit" onClick={() => handleSearch(search)}>
                <SearchIcon className="[&_svg]:size-2" /> <span className='hidden lg:inline'>Search</span>
            </Button>
        </div>
    );
}
