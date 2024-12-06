import React from "react";
import "./Menu.css";

function MenuitemsDinner() {
  const dishes = [
    "AVOCADO PAPDI CHAAT",
    "CRISPY OKRA & HUMMUS",
    "ROASTED PAPAD & CHUTNEYS",
    "BENGALI BEET CHOP",
    "THECHA PANEER TIKKA",
    "ROASTED CAULIFLOWER",
    "SHRIMP KOLIWADA",
    "CRAB PURI CAVIAR",
    "OYSTERS (1/2 DOZEN)",
    "SARDEE SALAD",
    "EVERGREEN CHICKEN TIKKA",
    "CHICKEN TIKKA PIZZA",
    "CHILI PANEER PIZZA",
    "TRUFFLE MALAI MUSHROOM PIZZA",
    "KERALA ROAST CHICKEN",
    "VINDALOO BBQ PORK RIBS",
    "TAMARIND LAMB CHOPS",
    "GRILLED CHILEAN SEA BASS",
    "CAFREAL BEEF STEAK",
    "KOLKATA LAMB BIRIYANI",
    "HYDERABADI CHICKEN BIRIYANI",
    "AWADHI VEGETABLE BIRYANI",
    "MASALA BABY EGGPLANT",
    "AMRITSARI MUTTER PANEER",
    "SARSON KA SAAG",
    "RAJMA DAL MAKHANI",
    "FLOYD’S GOAN FISH CURRY",
    "BURRATA BUTTER CHICKEN",
    "RAILWAY MUTTON MASALA",
    "NAAN",
    "MULTIGRAIN ROTI",
    "BUTTER CHICKEN KULCHA",
    "RICE",
    "RAITA",
    "ACHAAR"
  ];

  return (
    <div className="menu-container">
         <h1>TO START</h1>
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

export default MenuitemsDinner;
