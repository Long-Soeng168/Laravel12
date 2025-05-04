import MyStepper from '@/components/my-stepper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import NokorTechLayout from '../layouts/nokor-tech-layout';
import CartItemList from './components/CartItemList';
import ClearCartButton from './components/ClearCartButton';

const formatCurrency = (value) => `$${parseFloat(value).toFixed(2)}`;

const ShoppingCart = () => {
    if (typeof window === 'undefined') return null;
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            setCartItems(parsedCart.cartItems || []);
        }
    }, []);

    const cartSubtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
    const shippingCost = 2.0;
    const cartTotal = cartSubtotal + shippingCost;

    return (
        <NokorTechLayout>
            <div className="mx-auto my-10 max-w-screen-xl px-4">
                {/* <h1 className="mb-8 text-2xl font-bold lg:text-2xl">Shopping Cart</h1> */}
                <MyStepper steps={['Cart', 'Checkout', 'Complete']} currentStep={1} />
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Products Table */}
                    <div className="lg:w-8/12">
                        <div className="overflow-x-auto">
                            <CartItemList />
                        </div>

                        <div className="mt-6 flex justify-between">
                            <ClearCartButton />
                            <div className="space-x-4">
                                <Link href="/checkout">
                                    <Button>Checkout</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="bg-muted rounded-md p-6 shadow-sm lg:w-4/12">
                        <h2 className="mb-6 text-xl font-bold">Summary</h2>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-sm font-semibold">Products</AccordionTrigger>
                                <AccordionContent className="mt-4 text-sm">
                                    <table className="w-full">
                                        <tbody>
                                            {cartItems.map((product) => (
                                                <tr key={`summary-${product.id}`}>
                                                    <td className="flex items-center p-2">
                                                        <img src={product.image} alt="" className="mr-2 aspect-square w-10 rounded object-cover" />
                                                        <p className="line-clamp-2">{product.name}</p>
                                                    </td>
                                                    <td className="p-2">{formatCurrency(product.price)}</td>
                                                    <td className="p-2 text-center text-lg">{product.cartQuantity}</td>
                                                    <td className="p-2">{formatCurrency(product.price * product.cartQuantity)}</td>
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
                                <p>{formatCurrency(cartSubtotal)}</p>
                            </div>
                            <div className="flex justify-between text-sm">
                                <p>Shipping</p>
                                <p>{formatCurrency(shippingCost)}</p>
                            </div>
                            <div className="flex justify-between text-lg font-bold">
                                <p>Total</p>
                                <p>{formatCurrency(cartTotal)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NokorTechLayout>
    );
};

export default ShoppingCart;
