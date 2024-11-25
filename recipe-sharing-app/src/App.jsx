import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

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
