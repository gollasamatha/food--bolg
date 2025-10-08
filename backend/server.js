const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const recipes = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    image: "https://rakskitchen.net/wp-content/uploads/2012/07/paneer-butter-masala-recipe.jpg",
    ingredients: [
      "200g paneer",
      "2 tomatoes",
      "1 onion",
      "1 tbsp butter",
      "1 tsp garam masala",
      "Salt to taste"
    ],
    steps: [
      "Heat butter and sauté onions & tomatoes.",
      "Add spices and cook for 5 mins.",
      "Add paneer cubes and cook for 10 mins.",
      "Serve hot with naan or rice."
    ]
  },
  {
    id: 2,
    name: "Veg Biryani",
    image: "https://www.dwarakaorganic.com/wp-content/uploads/2012/06/Veg-Biryani-Recipe.jpg",
    ingredients: [
      "1 cup basmati rice",
      "1 cup mixed vegetables",
      "1 tbsp ghee",
      "1 tsp biryani masala",
      "Fried onions"
    ],
    steps: [
      "Cook rice 70% and set aside.",
      "Sauté vegetables with spices.",
      "Layer rice and veggies and cook for 10 mins.",
      "Serve with raita."
    ]
  },
  {
    id: 3,
    name: "Masala Dosa",
    image: "https://ranveerbrar.com/wp-content/uploads/2021/02/Masala-dosa-scaled.jpg",
    ingredients: [
      "Dosa batter",
      "Boiled potatoes",
      "Curry leaves",
      "Mustard seeds",
      "Salt"
    ],
    steps: [
      "Prepare potato filling.",
      "Spread batter on tawa.",
      "Add filling and fold dosa.",
      "Serve with chutney and sambar."
    ]
  },
  {
    id: 4,
    name: "Chole Bhature",
    image: "https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg",
    ingredients: [
      "1 cup chickpeas",
      "1 onion",
      "1 tomato",
      "Spices",
      "Flour for bhature"
    ],
    steps: [
      "Soak and cook chickpeas with masala.",
      "Knead flour and make bhature.",
      "Deep fry and serve hot with chole."
    ]
  },
  {
    id: 5,
    name: "Pav Bhaji",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2017/03/pav-bhaji.jpg",
    ingredients: [
      "4 pav buns",
      "2 potatoes",
      "1 capsicum",
      "1 tomato",
      "Butter and spices"
    ],
    steps: [
      "Mash and cook all veggies with masala.",
      "Add butter and toast pav.",
      "Serve hot with lemon and onions."
    ]
  }
];

app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  res.json(recipe || { message: "Recipe not found" });
});

app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));
