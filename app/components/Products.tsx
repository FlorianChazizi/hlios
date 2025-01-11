"use client"
import React, { useState } from "react";
import Image from "next/image";
import "../styles/products.css";
import productImage from "../assets/product-img.png";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Sweet");

    const products = [
        { image: productImage, name: "Coctail Ξηρών καρπών", category: "Sweet" },
        { image: productImage, name: "Roasted Almond", category: "Non-Sweet" },
        { image: productImage, name: "Honey-Coated Almonds", category: "Sweet" },
        { image: productImage, name: "Salted Cashews", category: "Non-Sweet" },
        { image: productImage, name: "Peanut Brittle", category: "Sweet" },
        { image: productImage, name: "Pumpkin Seeds", category: "Non-Sweet" },
        { image: productImage, name: "Candied Pecans", category: "Sweet" },
        { image: productImage, name: "Chickpeas", category: "Non-Sweet" },
    ];

    const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
    );

    return (
        <div className="products-container" id="products">
            <h4 className="product-header">Τα Προϊόντα</h4>

            {/* Category Buttons */}
            <div className="category-buttons">
                <button
                    className={`category-button ${selectedCategory === "Sweet" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("Sweet")}
                >
                    Γλυκά
                </button>
                <button
                    className={`category-button ${selectedCategory === "Non-Sweet" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("Non-Sweet")}
                >
                    Αλμυρά
                </button>
            </div>

            <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.name}
                            className="product-card"
                        >
                            <Image
                                className="product-image"
                                src={product.image}
                                alt={product.name}
                                title={product.name}
                                data-aos="fade-up"
                            />
                            <p className="product-name">{product.name}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Products;
