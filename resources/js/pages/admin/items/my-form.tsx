'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
    name_7152925923: z.boolean(),
    name_6688636024: z.string(),
    name_9932906773: z.string().min(1),
    name_8103330897: z.string(),
    name_8994733458: z.string(),
    name_5947944895: z.number(),
    name_9594727427: z.string(),
});

export default function MyForm() {
    const languages = [
        {
            label: 'English',
            value: 'en',
        },
        {
            label: 'French',
            value: 'fr',
        },
        {
            label: 'German',
            value: 'de',
        },
        {
            label: 'Spanish',
            value: 'es',
        },
        {
            label: 'Portuguese',
            value: 'pt',
        },
        {
            label: 'Russian',
            value: 'ru',
        },
        {
            label: 'Japanese',
            value: 'ja',
        },
        {
            label: 'Korean',
            value: 'ko',
        },
        {
            label: 'Chinese',
            value: 'zh',
        },
    ] as const;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>,
            );
        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Failed to submit the form. Please try again.');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-3xl space-y-8 py-10">
                <FormField
                    control={form.control}
                    name="name_7152925923"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>Use different settings for my mobile devices</FormLabel>
                                <FormDescription>You can manage your mobile notifications in the mobile settings page.</FormDescription>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name_6688636024"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Language</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn('w-[200px] justify-between', !field.value && 'text-muted-foreground')}
                                        >
                                            {field.value ? languages.find((language) => language.value === field.value)?.label : 'Select language'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search language..." />
                                        <CommandList>
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup>
                                                {languages.map((language) => (
                                                    <CommandItem
                                                        value={language.label}
                                                        key={language.value}
                                                        onSelect={() => {
                                                            form.setValue('name_6688636024', language.value);
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                'mr-2 h-4 w-4',
                                                                language.value === field.value ? 'opacity-100' : 'opacity-0',
                                                            )}
                                                        />
                                                        {language.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormDescription>This is the language that will be used in the dashboard.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_9932906773"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" type="" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_8103330897"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>One-Time Password</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <FormDescription>Please enter the one-time password sent to your phone.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_8994733458"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>You can manage email addresses in your email settings.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_5947944895"
                    render={({ field: { value, onChange } }) => (
                        <FormItem>
                            <FormLabel>Price - {value}</FormLabel>
                            <FormControl>
                                <Slider
                                    min={0}
                                    max={100}
                                    step={5}
                                    defaultValue={[5]}
                                    onValueChange={(vals) => {
                                        onChange(vals[0]);
                                    }}
                                />
                            </FormControl>
                            <FormDescription>Adjust the price by sliding.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">{t('Submit')}</Button>
            </form>
        </Form>
    );
}
