import "./ProductCard.css";
import "../index.css";

type ProductCard2Props = {
  product2: Product2;
};

const ProductCard2 = ({ product2 }: ProductCard2Props) => {
  const { title, image, body, reactions, views } = product2;

  return (
    <div className="product-card2">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-info">
        <div className="product-title2">{title}</div>
        <div className="product-body">{body}</div>
      </div>

      <div className="product-reactions">
        <div className="likes">{reactions.likes} Likes</div>
        <div className="dislikes">{reactions.dislikes} Dislikes</div>
      </div>

      <div className="views">{views} Views</div>
    </div>
  );
};

export default ProductCard2;
