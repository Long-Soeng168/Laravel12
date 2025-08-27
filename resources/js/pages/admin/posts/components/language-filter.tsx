import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const LanguageFilter = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(undefined);

    return (
        <div>
            <Select onValueChange={setSelectedLanguage} value={selectedLanguage}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="khmer">Khmer</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="thai">Thai</SelectItem>
                    <SelectItem value="vietnamese">Vietnamese</SelectItem>
                    <SelectItem value="korean">Korean</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageFilter;
