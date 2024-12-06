import React from "react";
import "./Menu.css";

function MenuitemsBrunch() {
    const dishes = [
        "AVOCADO PAPDI CHAAT",
        "MUMBAI VADA PAV",
        "BENGALI BEET CHOP",
        "KERALA FRIED CHICKEN",
        "SHRIMP KOLIWADA",
        "OLD DELHI CHAAT",
        "MANEESH CHOPPED SALAD",
        " CHICKEN TIKKA",
        " CHILI PANEER",
        " TRUFFLE MALAI MUSHROOM",
        "MASALA OMELETTE",
        "EGG DOSA",
        "CHILI CHEESE TOAST",
        "CARDAMOM WAFFLE",
        "SONA BURGER",
        "FLOYD'S GOAN FISH CURRY",
        " BUTTER CHICKEN",
        "RAILWAY CHICKEN MASALA",
        "MUTTER PANEER",
        "RAJMA DAL MAKHANI",
        "CHICKEN NUGGETS",
        "BUTTER CHICKEN",
        "MAC & CHEESE",
        "MASALA FRIES",
        "GRILLED CHEESE SANDWICH",
        "NAAN",
        "MULITGRAIN ROTI",
        "BUTTER CHICKEN KULCHA",
        "MASALA CHAI ICE CREAM",
        "CARAMELIZED WHITE CHOCOLATE CRUMBLE",
        "PINK GUAVA SORBET",
        "TENDER COCONUT ICE CREAM",
    ];

    return (
        <div className="menu-container">
            <h2>AVAILABLE SATURDAY-SUNDAY<br />12-3PM</h2>
            <div className="menu-cards">
                {dishes.map((dish, index) => (
                    <div key={index} className="menu-card">
                        <h4>{dish}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuitemsBrunch;
