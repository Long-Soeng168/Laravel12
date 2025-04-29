import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Check, ChevronsUpDown } from 'lucide-react';
import React, { useState } from 'react';
import NokorTechLayout from '../layouts/nokor-tech-layout';

// Types
type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    subtotal: number;
};

type Option = { value: string; label: string };

// Example products
const products: Product[] = [
    {
        id: 1,
        name: 'Gaming PC with Intel i7',
        image: 'https://via.placeholder.com/100',
        price: 4349.0,
        quantity: 1,
        subtotal: 4349.0,
    },
    {
        id: 2,
        name: 'MSI MEG Trident X 10SD',
        image: 'https://via.placeholder.com/100',
        price: 4349.0,
        quantity: 1,
        subtotal: 4349.0,
    },
];

// Components
const FormField: React.FC<{
    label: string;
    required?: boolean;
    children: React.ReactNode;
}> = ({ label, required, children }) => (
    <div className="mb-4 text-sm">
        <p className="font-semibold text-black">
            {label} {required && <span className="text-red-500">*</span>}
        </p>
        {children}
    </div>
);

const Dropdown: React.FC<{
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}> = ({ label, options, value, onChange }) => {
    const [open, setOpen] = useState(false);

    return (
        <FormField label={label} required>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between py-2">
                        {value ? options.find((option) => option.value === value)?.label : `Select ${label.toLowerCase()}...`}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-2">
                    <Command>
                        <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
                        <CommandList>
                            <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
                            <CommandGroup>
                                {options.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={(currentValue) => {
                                            onChange(currentValue === value ? '' : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        {option.label}
                                        <Check className={cn('ml-auto', value === option.value ? 'opacity-100' : 'opacity-0')} />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </FormField>
    );
};
 

const CheckoutPage: React.FC = () => {
    const [valueProvince, setValueProvince] = useState('');
    const [valueCountry, setValueCountry] = useState('');

    return (
        <NokorTechLayout>
            <div className="mx-auto mb-20 max-w-screen-xl">
                <h1 className="mb-8 text-2xl font-bold lg:text-3xl">Checkout</h1>
                <div className="flex flex-col gap-12 px-2 lg:flex-row">
                    {/* Shipping Address */}
                    <div className="lg:w-8/12">
                        <div>
                            <FormField label="Name" required>
                                <input type="text" className="w-full rounded-md border px-4 py-2 text-gray-800" />
                            </FormField>
                            <FormField label="Phone Number" required>
                                <input type="email" className="w-full rounded-md border px-4 py-2 text-gray-800" />
                            </FormField>
                            <FormField label="Note" required>
                                <Textarea id="note" placeholder="Note" />
                            </FormField>
                        </div>
                        <Link href="/checkout_success" className="flex justify-end">
                            <Button>Place Order</Button>
                        </Link>
                    </div>

                    {/* Order Summary */}
                    <div className="rounded-md bg-gray-50 p-6 shadow-sm lg:w-4/12">
                        <h2 className="mb-6 text-xl font-bold">Summary</h2>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-sm font-semibold">Products</AccordionTrigger>
                                <AccordionContent className="mt-4 text-sm text-gray-600">
                                    <table className="w-full space-y-2">
                                        <tbody>
                                            {products.map((product) => (
                                                <tr key={product.id}>
                                                    <td className="flex items-center p-2">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="mr-2 aspect-square w-10 rounded object-cover"
                                                        />
                                                        <p className="line-clamp-2 text-gray-700">{product.name}</p>
                                                    </td>
                                                    <td className="p-2 text-gray-600">${product.price.toFixed(2)}</td>
                                                    <td className="p-2 text-center text-lg">{product.quantity}</td>
                                                    <td className="p-2 text-gray-600">${product.subtotal.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <div className="mt-6 space-y-2 pt-4">
                            <div className="flex justify-between text-sm">
                                <p>Subtotal</p>
                                <p>$13,047.00</p>
                            </div>
                            <div className="flex justify-between text-sm">
                                <p>Shipping</p>
                                <p>$2.00</p>
                            </div>
                            <div className="flex justify-between text-lg font-bold">
                                <p>Total</p>
                                <p>$13,049.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NokorTechLayout>
    );
};

export default CheckoutPage;
