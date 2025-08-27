import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const TypeFilter = () => {
    const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

    return (
        <div>
            <Select onValueChange={setSelectedType} value={selectedType}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="content">Content</SelectItem>
                    <SelectItem value="video">Video (Youtube Video Link)</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default TypeFilter;
