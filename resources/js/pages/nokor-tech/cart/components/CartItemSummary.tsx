import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useCart } from '@/contexts/cart-contexts';
const formatCurrency = (value) => `$${parseFloat(value).toFixed(2)}`;

const CartItemSummary = () => {
    const { cartItems } = useCart();
    return (
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
                    <p>___</p>
                </div>
                <div className="flex justify-between text-sm">
                    <p>Shipping</p>
                    <p>___</p>
                </div>
                <div className="flex justify-between text-lg font-bold">
                    <p>Total</p>
                    <p>__</p>
                </div>
            </div>
        </div>
    );
};

export default CartItemSummary;
