import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

const FilterCategory = () => {
    const { postCategories } = usePage().props;
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
                                <CommandItem value="" onSelect={() => setSelectedCategory(null)}>
                                    <Check className={cn('mr-2 h-4 w-4', selectedCategory === null ? 'opacity-100' : 'opacity-0')} />
                                    Select category
                                </CommandItem>
                                {postCategories?.map((category) => (
                                    <CommandItem value={category.name} key={category.code} onSelect={() => setSelectedCategory(category.code)}>
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
