import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProduct.module.css";
import image1 from "../images/retro1.jpg";
import image2 from "../images/retro4.jpg";
import image3 from "../images/retro5.jpg";

const products = [
  {
    id: 1,
    name: "Jordan Retro I (Size-42)",
    description:
      "The Jordan Retro 1, also known as the Air Jordan 1, is a highly popular and iconic basketball shoe that was originally released by Nike in 1985.",
    price: 200,
    image: image1,
  },
  {
    id: 2,
    name: "Jordan Retro IV (Size-42)",
    description:
      "The Jordan Retro 4, also known as the Air Jordan 4, is another iconic basketball shoe from the Air Jordan line. It was first released by Nike in 1989",
    price: 250,
    image: image2,
  },
  {
    id: 3,
    name: "Jordan Retro V (Size-42)",
    description:
      "The Jordan Retro 5 is a classic sneaker that exudes style and performance. Originally released in 1990, this iconic silhouette continues to captivate sneaker enthusiasts with its unique design elements and rich basketball heritage.",
    price: 300,
    image: image3,
  },
];

const AvailableProduct = () => {
  const productList = products.map((product) => (
    <ProductItem
      key={product.id}
      image={product.image}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    
    />
  ));
  return (
    <section className={classes.product}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};
export default AvailableProduct;
