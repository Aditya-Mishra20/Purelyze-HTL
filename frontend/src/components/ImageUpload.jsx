// Import necessary modules
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the ImageUpload component
const ImageUpload = ({ onUploadSuccess }) => {
  // Define state variables
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Define the onDrop callback function
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
    setErrorMessage(""); // Reset error message on new file selection
  }, []);

  // Get dropzone props
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Define the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Send POST request to upload the image
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Log the response data and show success toast
      console.log(response.data);
      toast.success("Image sent successfully and Data received!");
      // Pass the response data to the parent component
      onUploadSuccess(response.data);
      
      // Clear the file and preview after successful upload
      setFile(null);
      setPreview(null);
    } catch (error) {
      // Handle errors and show error toast
      if (error.response) {
        console.error("Error response:", error.response.data);
        setErrorMessage(
          `Upload failed: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else if (error.request) {
        console.error("Error request:", error.request);
        setErrorMessage("No response from server");
      } else {
        console.error("Error message:", error.message);
        setErrorMessage(`Error: ${error.message}`);
      }
      toast.error("Error occurred during upload");
    }
  };

  // Return the JSX content
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-blue-500 rounded-md p-5 text-center cursor-pointer flex justify-center items-center h-60 w-80"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-white">Drop the files here...</p>
        ) : (
          <p className="text-white">Drag 'n' drop an image here, or click to select one</p>
        )}
      </div>
      {preview && (
        <div className="mt-4">
          <img src={preview} alt="Preview" className="h-40 w-auto rounded-md" />
        </div>
      )}
      {file && <p className="mt-4 text-white">Selected file: {file.name}</p>}
      {errorMessage && <p className="mt-4 text-white">{errorMessage}</p>}
      <button
        type="submit"
        className="mt-10 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Upload
      </button>
    </form>
  );
};

// Export the ImageUpload component
export default ImageUpload;
