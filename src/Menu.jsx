import React, { useState } from "react";
import "./Menu.css";
import MenuitemsBrunch from "./MenuitemsBrunch";
import MenuitemsDinner from "./MenuitemsDinner";
import MenuitemsMocktails from "./MenuitemsMocktails";

function Menu() {
    const [MenuList, setMenuList] = useState(<MenuitemsBrunch />);
    const [classing, setClassing] = useState("red");

    function handleClick0() {
        setMenuList(<MenuitemsBrunch />);
        setClassing("red");
    }

    function handleClick1() {
        setMenuList(<MenuitemsDinner />);
        setClassing("blue");
    }

    function handleClick2() {
        setMenuList(<MenuitemsMocktails />);
        setClassing("green");
    }

    return (
        <div className="container">
            <h1 className="heading">Menu</h1>
            <div className="categories">
                <p className={classing === "red" ? "underline" : ""} onClick={handleClick0}>Brunch</p>
                <p className={classing === "blue" ? "underline" : ""} onClick={handleClick1}>Dinner</p>
                <p className={classing === "green" ? "underline" : ""} onClick={handleClick2}>Happy Hour</p>
            </div>
            <div className="content2-wrapper">
                {MenuList}
            </div>
        </div>
    );
}

export default Menu;
