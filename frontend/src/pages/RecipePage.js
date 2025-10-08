import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("https://food-bolg-backenda.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((r) => r.id === parseInt(id));
        setRecipe(selected);
      });
  }, [id]);

  if (!recipe) return <h2>Loading recipe...</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <h3>Ingredients</h3>
      <ul style={{ listStyle: "none" }}>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipePage;
