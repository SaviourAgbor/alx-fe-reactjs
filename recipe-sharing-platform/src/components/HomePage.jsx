import React, {useState, useEffect} from "react";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('./data.json');
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes", error);
            }  
        };
        fetchRecipes();
    }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe, index) => (
        <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
            <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 sm:h-64 md:h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2">
            {recipe.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">{recipe.summary}</p>
        </div>
        ))}
        <h2>recipe Homepage</h2>
    </div>
  );
}

export default HomePage;