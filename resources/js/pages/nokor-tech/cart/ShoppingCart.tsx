import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import * as React from 'react';
import NokorTechLayout from '../layouts/nokor-tech-layout';

type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    subtotal: number;
};

const products: Product[] = [
    {
        id: 1,
        name: 'MSI MEG Trident X Gaming Desktop',
        image: 'https://via.placeholder.com/100',
        price: 4349.0,
        quantity: 1,
        subtotal: 13047.0,
    },
    {
        id: 2,
        name: 'Dell XPS 13 Laptop',
        image: 'https://via.placeholder.com/100',
        price: 999.0,
        quantity: 1,
        subtotal: 999.0,
    },
];

const ShoppingCart = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    return (
        <NokorTechLayout>
            <div className="mx-auto mb-20 max-w-screen-xl px-2">
                <h1 className="mb-8 text-2xl font-bold lg:text-3xl">Shopping Cart</h1>

                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Products Table */}
                    <div className="lg:w-8/12">
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr className="text-left text-sm font-semibold text-gray-700">
                                        <th className="border-b-2 py-4 text-center">Item</th>
                                        <th className="border-b-2 py-4 text-center">Price</th>
                                        <th className="border-b-2 py-4 text-center">Qty</th>
                                        <th className="border-b-2 py-4 text-center">Subtotal</th>
                                        <th className="border-b-2 py-4 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id} className="space-x-2 hover:bg-gray-50">
                                            <td className="flex items-center p-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="mr-2 aspect-square w-20 rounded object-cover"
                                                />
                                                <p className="line-clamp-2 w-60 text-gray-700 lg:w-96">{product.name}</p>
                                            </td>
                                            <td className="p-4 text-gray-600">${product.price.toFixed(2)}</td>
                                            <td className="p-4 text-center text-lg">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Button variant="outline" size="icon">
                                                        <Minus />
                                                    </Button>
                                                    {product.quantity}
                                                    <Button variant="outline" size="icon">
                                                        <Plus />
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-600">${product.subtotal.toFixed(2)}</td>
                                            <td className="space-x-2 p-4 text-center">
                                                <button className="rounded bg-red-500 p-2 text-white hover:bg-red-600">
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 flex justify-between">
                            <Link href="#">
                                <Button
                                    variant="outline"
                                    className="border-destructive text-destructive hover:bg-primary hover:text-primary-foreground hover:border-primary"
                                >
                                    <Trash2 />
                                    Clear Cart
                                </Button>
                            </Link>
                            <div className="space-x-4">
                                <Link href="/checkout">
                                    <Button>Checkout</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Summary Section */}
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

export default ShoppingCart;
