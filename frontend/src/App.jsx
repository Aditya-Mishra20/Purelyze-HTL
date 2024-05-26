import { useState } from "react";

import ImageUpload from "./components/ImageUpload";
import Home from "./components/Home";
import IngredientList2 from "./components/IngredientList2";
import Navbar from "./components/Header/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

// import IngredientsList from "./components/IngredientCard";



function App() {
  // const [ingredients, setIngredients] = useState([]);

  // const handleUploadSuccess = (data) => {
  //   console.log("Upload success data:", data); // Log the data received from the server
  //   // Assume data contains the ingredient list in the response
  //   setIngredients(data);
  // };

  return (
    <>
    <Navbar/>
    <Outlet />
    <ToastContainer />
    <Footer/>

      {/* <Home />
      <ImageUpload onUploadSuccess={handleUploadSuccess} />
      <IngredientList2 data={ingredients} /> */}
    </>
  );
}

export default App;
