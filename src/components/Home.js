import faker from "faker";
import { useState } from "react";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
    }))
    const [products] = useState(productsArray);
    return <div className="productContainer">
        {products.map((prod) => {
        return <SingleProduct prod={prod}/>
        })}

    </div>
}
export default Home;
