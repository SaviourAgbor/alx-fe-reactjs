// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";
import RecipeDetails from "./RecipeDetails";
import EditRecipeForm from "./EditRecipeForm";
import SearchBar from "./SearchBar";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Recipe</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;