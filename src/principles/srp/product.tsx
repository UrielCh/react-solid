import { IProduct } from "./hooks/useProducts";
import { Star } from "./star";

interface IProductProps {
  product: IProduct;
}

export function Product(props: IProductProps) {
  const { product } = props;
  const { id, title, price, rating, image } = product;

  return (
    <div className="w-56 flex flex-col items-center m-2 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg h-48"
          src={image}
          alt="product image"
        />
      </a>
      <div className="flex flex-col px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5 flex-1">
          {Array(Math.trunc(rating.rate))
            .fill("")
            .map((_, idx) => (
              <Star title={`${idx + 1}th star`} />
            ))}

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {Math.trunc(rating.rate)}
          </span>
        </div>
        <div className="flex flex-col items-between justify-around">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${price.toFixed(2)}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            // onClick={onAddToCart}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
