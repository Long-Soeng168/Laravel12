import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { router } from '@inertiajs/react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const languages = [
    { code: 'khmer', name: 'Khmer' },
    { code: 'english', name: 'English' },
    { code: 'chinese', name: 'Chinese' },
    { code: 'french', name: 'French' },
    { code: 'thai', name: 'Thai' },
    { code: 'vietnamese', name: 'Vietnamese' },
    { code: 'korean', name: 'Korean' },
    { code: 'japanese', name: 'Japanese' },
];

const LanguageFilter = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

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
        setSelectedLanguage(initialQueryParams.get('language'));
    }, []);

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" className={cn('w-full justify-between', !selectedLanguage && 'text-muted-foreground')}>
                        {selectedLanguage ? languages.find((lang) => lang.code === selectedLanguage)?.name : 'Select language'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                    <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandList>
                            <CommandEmpty>No language found.</CommandEmpty>
                            <CommandGroup>
                                <CommandItem value="" onSelect={() => handleFilter('language', '')}>
                                    <Check className={cn('mr-2 h-4 w-4', selectedLanguage === null ? 'opacity-100' : 'opacity-0')} />
                                    All languages
                                </CommandItem>
                                {languages.map((lang) => (
                                    <CommandItem value={lang.name} key={lang.code} onSelect={() => handleFilter('language', lang.code)}>
                                        <Check className={cn('mr-2 h-4 w-4', lang.code === selectedLanguage ? 'opacity-100' : 'opacity-0')} />
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

export default LanguageFilter;
