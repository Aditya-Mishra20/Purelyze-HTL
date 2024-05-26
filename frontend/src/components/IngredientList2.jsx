import React from "react";
import './scrollbar.css'
const getColorClass = (score) => {
  if (score > 3) return "bg-red-500 text-white";
  if (score >= 3 && score <= 4) return "bg-yellow-500 text-white";
  return "bg-green-500 text-white";
};

const IngredientList2 = ({ data }) => {
  console.log("ingredientslist2: data =", data);

  // Filter for hazardous ingredients
  const hazardousIngredients = data.filter(
    (ingredient) => ingredient.health_score > 3
  );

  const hazardousIngredientNames = hazardousIngredients
    .map((ingredient) => ingredient.ingredient_name)
    .join(", ");

  return (
    <div className="bg-gray-900 min-h-screen p-4 md:p-10">
      <div className="bg-[#7E22CE] text-white p-4 rounded-lg mb-6 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          ML-Powered Ingredient Analysis
        </h1>
      </div>

      {hazardousIngredients.length > 0 && (
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-red-500">
            Hazardous Ingredients
          </h1>
          <p className="text-lg md:text-2xl mt-2 text-white">
            Ingredients: {hazardousIngredientNames}
          </p>
        </div>
      )}
      {hazardousIngredients.length === 0 && (
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-green-500">
            Result
          </h1>
        </div>
      )}

      <div className="bg-gray-800 overflow-scroll custom-scrollbar h-80 shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
          Insights
        </h2>
        <div className="space-y-4">
          {data.map((ingredient, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between bg-gray-700 p-4 rounded-lg shadow-sm"
            >
              <div className="flex-1 mb-4 md:mb-0 md:mr-4">
                <h3 className="text-lg font-semibold text-white">
                  Ingredient:{" "}
                  <span className="text-blue-500">
                    {ingredient.ingredient_name}
                  </span>
                </h3>
                <p className="text-gray-300">{ingredient.description}</p>
                <p className="text-gray-400">
                  Recommended daily intake: {ingredient.daily_intake}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Health Risk Score:</p>
                <span
                  className={`inline-block px-3 py-1 text-lg font-bold rounded-full ${getColorClass(
                    ingredient.health_score
                  )}`}
                >
                  {ingredient.health_score.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientList2;
