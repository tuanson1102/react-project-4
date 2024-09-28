import { ReactNode } from "react";
import "./ProductList.css";

type ProductListProps = {
  children: ReactNode;
};
const ProductList = ({ children }: ProductListProps) => {
  return <div className="product-list">{children}</div>;
};
export default ProductList;
