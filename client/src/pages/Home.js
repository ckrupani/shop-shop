import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => (
    <div className="container">
        <CategoryMenu />
        <ProductList />
    </div>
);

export default Home;
