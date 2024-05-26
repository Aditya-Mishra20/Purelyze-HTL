import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import IngredientList2 from "./IngredientList2";
import Chatbot from "./Chatbot";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [ingredients, setIngredients] = useState([]);

  const handleUploadSuccess = (data) => {
    console.log("Upload success data:", data); // Log the data received from the server
    // Assume data contains the ingredient list in the response
    setIngredients(data);
  };

  return (
    <>
      {" "}
      <div className="p-4 md:p-12 flex flex-col md:flex-row min-h-screen bg-gray-900">
        <div className="w-full md:w-1/2 flex justify-center items-center p-2">
          <ImageUpload onUploadSuccess={handleUploadSuccess} />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <IngredientList2 data={ingredients} />
        </div>
        <NavLink to='/chatbot'>
        <button
        type="submit"
        className="mt-10 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Chat
      </button>
        </NavLink>
        
      </div>
      {/* <div className="App flex items-center justify-center min-h-screen bg-gray-200">
          <header className="App-header">
            <h1 className="text-4xl mb-4">Chatbot</h1>
            <Chatbot />
          </header>
        </div> */}

    </>
  );
};

export default Dashboard;
