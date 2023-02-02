import { useState } from "react";
import { AddCategory, GridContainer } from "./components";

export const GifGridApp = () => {
    const [categories, setCategories] = useState(['Valorant']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };
    return (
        <>
            <h1>GifGrid</h1>

            <AddCategory onNewCategory={(event) => onAddCategory(event)} />

            <button onClick={onAddCategory}>Agregar</button>

            {categories.map((category) => (
                <GridContainer key={category} category={category} />
            ))}
        </>
    );
};
