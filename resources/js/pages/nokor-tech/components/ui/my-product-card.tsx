import { Verified } from 'lucide-react';
import React from 'react';

interface MyProductCardProps {
    product: any;
}

const MyProductCard: React.FC<MyProductCardProps> = ({ product }) => {
    const isInStock = product.stock_status === 'instock';

    return (
        <a href={`/products/${product.id}`} className="flex flex-col overflow-hidden rounded-md transition-all duration-300 hover:scale-105">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-md border-[0.5px]">
                {product.images?.length > 0 ? (
                    <img
                        width={600}
                        height={600}
                        src={`/assets/images/items/thumb/${product.images[0]?.image}`}
                        alt={product.name}
                        className="aspect-square h-full w-full object-cover"
                    />
                ) : (
                    <img
                        width={600}
                        height={600}
                        src="/assets/icons/image-icon.png"
                        alt="Placeholder"
                        className="aspect-square h-full w-full object-cover p-8 opacity-50"
                    />
                )}
            </div>

            <div className="p-2">
                {/* Stock Status */}
                {product.stock_status != 'na' && (
                    <div className={`flex items-center justify-start gap-2 py-2 text-sm ${isInStock ? 'text-green-500' : 'text-red-500'}`}>
                        <Verified size={16} />

                        <p>{isInStock ? 'In Stock' : 'Out of Stock'}</p>
                    </div>
                )}

                {/* Product Name */}
                <p className="line-clamp-3">{product.name}</p>

                {/* Product Price */}
                <div className="flex items-center gap-2">
                    <p className="text-md text-red-400">{parseFloat(product.price) > 0 && `$${parseFloat(product.price).toFixed(2)}`}</p>
                </div>
            </div>
        </a>
    );
};

export default MyProductCard;
