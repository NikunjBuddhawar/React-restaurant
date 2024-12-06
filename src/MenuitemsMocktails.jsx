import React from "react";
import "./Menu.css";

function MenuitemsMocktails() {
    const mocktails = [
        "SPICY CHILI MARGARITA",
        "75 SUITORS",
        "LAVENDER BLISS",
        "GOLD NEGRONI",
        "TAJ EMINENCE",
        "COCO-LICIOUS",
        "MANGO MALAI",
        "CRISPY OKRA & HUMMUS",
        "SHRIMP KOLIWADA",
        "CHICKEN TIKKA",
        "CHILI PANEER",
        "TRUFFLE MALAI MUSHROOM"
    ];

    return (
        <div className="menu-container">
            <h1>MONDAY - FRIDAY 5-7PM</h1>
            <div className="menu-cards">
                {mocktails.map((mocktail, index) => (
                    <div key={index} className="menu-card">
                        <h4>{mocktail}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuitemsMocktails;
