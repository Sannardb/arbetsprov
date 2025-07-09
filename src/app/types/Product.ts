interface ProductAttributes {
  "article-number": string;
  "image-url": string;
  price: number;
  description: string;
  category: string;
  color: string;
  size: string;
  "url-slug": string;
  brand: string;
}

interface ProductGroup {
  title: string;
  attributes: ProductAttributes[];
}

interface ProductCardProps {
  product: ProductGroup;
  selectedColor?: string;
}
