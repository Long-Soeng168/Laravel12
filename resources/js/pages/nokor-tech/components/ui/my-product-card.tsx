import { Star, Verified } from 'lucide-react';

interface MyProductCardProps {
    instock: boolean;
    imageUrl: string;
    rating: number;
    reviews: number;
    name: string;
    price: number;
    oldPrice?: number;
}

const MyProductCard = (
    {
        product
    }
        :
        {
            product: MyProductCardProps
        }
) => {
    return (
        <a href={`/products/1`} className='flex flex-col rounded-md overflow-hidden m-2'>
            {/* Product Image */}
            <img
                width={600}
                height={600}
                src={product.imageUrl}
                alt={`Product`}
                className="aspect-square object-cover w-full h-full"
            />
            <div className='p-2'>
                {/* Stock Status */}
                <div className={`flex gap-2 text-sm ${product.instock ? 'text-green-500' : 'text-red-500'} items-center justify-start py-2`}>
                    <Verified size={16} />
                    <p>{product.instock ? 'In Stock' : 'Out of Stock'}</p>
                </div>

                {/* Product Name */}
                <p className="line-clamp-2 text-md font-semibold">
                    {product.name}
                </p>

                {/* Product Price */}
                <div className='flex items-center gap-2'>
                    {product.oldPrice && <p className='text-gray-400 line-through'>${product.oldPrice.toFixed(2)}</p>}
                    <p className='text-md text-red-400 '>${product.price.toFixed(2)}</p>
                </div>
            </div>
        </a>
    );
};

export default MyProductCard;
