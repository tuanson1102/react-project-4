type Product = {
  title: string;
  image: string;
  rating?: Rating; // có thể có hoặc không
  variants: Variant[];
};

type Variant = {
  price: number;
  compare_at_price?: number;
};

type Rating = {
  count: number;
  rate: number;
};
