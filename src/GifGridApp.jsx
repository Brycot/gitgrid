import { useState } from "react";
import { AddCategory, GridContainer } from "./components";

export const GifGridApp = () => {
    const [categories, setCategories] = useState(["Valorant"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };
    return (
        <>
            <h1>Gif/Grid</h1>

            <AddCategory onNewCategory={(event) => onAddCategory(event)} />

            {categories.map((category) => (
                <GridContainer key={category} category={category} />
            ))}
        </>
    );
};
