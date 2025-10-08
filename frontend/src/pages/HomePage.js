import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://food-bolg-backenda.onrender.com")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🍴 Delicious Food Recipes</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              margin: "20px",
              padding: "15px",
              width: "250px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{recipe.name}</h3>
            <Link to={`/recipe/${recipe.id}`}>Go to Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
