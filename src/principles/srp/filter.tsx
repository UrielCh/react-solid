import { Rating } from "react-simple-star-rating";
import { IProduct } from "./hooks/useProducts";

export function filterProducts(products: IProduct[], rate: number) {
  return products.filter(
    (product: IProduct) => product.rating.rate > rate
  );
}

interface IFilterProps {
  filterRate: number;
  handleRating: (rate: number) => void;
}

export function Filter(props: IFilterProps) {
  const { filterRate, handleRating } = props;

  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <span className="font-semibold">Minimum Rating </span>
      <Rating
        initialValue={filterRate}
        SVGclassName="inline-block"
        onClick={handleRating}
      />
    </div>
  );
}
