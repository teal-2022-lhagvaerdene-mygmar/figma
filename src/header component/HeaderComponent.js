import { Header } from "./Header";
import { ProductItem } from "./ProductItem";
import { ProductList } from "./ProductLIst";

export function HeaderComponent() {
  return (
    <>
      <Header />
      <ProductList />
      <ProductItem />
    </>
  );
}
