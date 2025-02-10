
import HeroSec from "./components/HeroSec";
import Categories from "./components/categories";
import AllProducts from "./components/AllProducts";

import Cards from "./components/Cards";

export default async function Home() {
 

  return (
    <main>
      <section>
        <HeroSec />
       <Cards />
        <Categories />
        <AllProducts />
      </section>
    </main>
  );
}
