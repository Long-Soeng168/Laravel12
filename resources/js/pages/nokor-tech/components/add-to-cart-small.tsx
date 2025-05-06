import { MyTooltipButton } from '@/components/my-tooltip-button';
import { useCart } from '@/contexts/cart-contexts';
import { ShoppingCartIcon } from 'lucide-react';

function AddToCartSmall({ item }: { item: any }) {
    const { addToCart } = useCart();
    return (
        <div>
            <MyTooltipButton
                title="Add to cart"
                onClick={() => {
                    addToCart(item);
                }}
                className="group border-primary relative w-10 cursor-pointer overflow-hidden rounded-lg border bg-white p-2 text-center font-semibold text-black"
            >
                <ShoppingCartIcon />
            </MyTooltipButton>
        </div>
    );
}

export default AddToCartSmall;
