import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { router } from '@inertiajs/react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const types = [
    { code: 'content', name: 'Content' },
    { code: 'video', name: 'Video' },
];

const TypeFilter = () => {
    const [selectedtype, setSelectedtype] = useState<string | null>(null);

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
        setSelectedtype(initialQueryParams.get('type'));
    }, []);

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" className={cn('w-full justify-between', !selectedtype && 'text-muted-foreground')}>
                        {selectedtype ? types.find((lang) => lang.code === selectedtype)?.name : 'Select type'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                    <Command>
                        <CommandInput placeholder="Search type..." />
                        <CommandList>
                            <CommandEmpty>No type found.</CommandEmpty>
                            <CommandGroup>
                                <CommandItem value="" onSelect={() => handleFilter('type', '')}>
                                    <Check className={cn('mr-2 h-4 w-4', selectedtype === null ? 'opacity-100' : 'opacity-0')} />
                                    All types
                                </CommandItem>
                                {types.map((lang) => (
                                    <CommandItem value={lang.name} key={lang.code} onSelect={() => handleFilter('type', lang.code)}>
                                        <Check className={cn('mr-2 h-4 w-4', lang.code === selectedtype ? 'opacity-100' : 'opacity-0')} />
                                        {lang.name}
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

export default TypeFilter;
