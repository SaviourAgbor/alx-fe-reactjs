import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {

  return (
    <>
      <AddRecipeForm />
      <RecipeList />
    </>
  );
};

export default App;
