import { useCart } from '@/contexts/cart-contexts';
import { ShoppingCartIcon } from 'lucide-react';

function AddToCart({ item }: { item: any }) {
    const { addToCart } = useCart();
    return (
        <>
            <button
                onClick={() => {
                    addToCart(item)
                }}
                className="group border-primary relative w-52 cursor-pointer overflow-hidden rounded-full border bg-white p-2 text-center font-semibold text-black"
            >
                <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    Add To Cart
                </span>
                <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                    <span>Add To Cart</span>
                    <ShoppingCartIcon />
                </div>
                <div className="absolute top-[40%] left-[20%] h-2 w-2 scale-[1] rounded-lg bg-black transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#263381] dark:group-hover:bg-[#263381]"></div>
            </button>
        </>
    );
}

export default AddToCart;
