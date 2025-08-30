import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { router, usePage } from '@inertiajs/react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const FilterCategory = () => {
    const { postCategories } = usePage().props;
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const initialQueryParams = new URLSearchParams(window.location.search);
    const currentPath = window.location.pathname;

    function handleFilter(field, value) {
        try {
            const queryParams = new URLSearchParams(window.location.search);
            if (field && value) {
                queryParams.set(field, value);
            } else {
                queryParams.delete(field);
            }
            queryParams.set('page', '1');
            const queryParamsString = queryParams.toString();
            router.get(currentPath + '?' + queryParamsString);
        } catch (error) {
            console.error('Form submission error', error);
        }
    }

    useEffect(() => {
        setSelectedCategory(initialQueryParams.get('category_code'));
    }, []);

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" className={cn('w-full justify-between', !selectedCategory && 'text-muted-foreground')}>
                        {selectedCategory ? postCategories?.find((category) => category.code === selectedCategory)?.name : 'Select category'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                    <Command>
                        <CommandInput placeholder="Search category..." />
                        <CommandList>
                            <CommandEmpty>No category found.</CommandEmpty>
                            <CommandGroup>
                                <CommandItem value="" onSelect={() => handleFilter('category_code', '')}>
                                    <Check className={cn('mr-2 h-4 w-4', selectedCategory === null ? 'opacity-100' : 'opacity-0')} />
                                    All category
                                </CommandItem>
                                {postCategories?.map((category) => (
                                    <CommandItem
                                        value={category.name}
                                        key={category.code}
                                        onSelect={() => handleFilter('category_code', category.code)}
                                    >
                                        <Check className={cn('mr-2 h-4 w-4', category.code === selectedCategory ? 'opacity-100' : 'opacity-0')} />
                                        {category.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default FilterCategory;
