import React, { useState } from 'react';
import uploadLogo from "../assets/exit.svg"; // Replace with your actual logo path

const MainPage = () => {
    const [selectedImage, setSelectedImage] = useState(null); // State to hold the uploaded image URL
    const [loading, setLoading] = useState(false); // State to manage the loading state

    // Function to handle image upload
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
            setLoading(true); // Show loading state
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch('http://localhost:5000/upload', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    const data = await response.json();
                    setSelectedImage(`http://localhost:5000/uploads/${data.imageQuestionId}`); // Set the uploaded image URL
                } else {
                    console.error("Error uploading image:", response.statusText);
                }
            } catch (error) {
                console.error("Error uploading image:", error);
            } finally {
                setLoading(false); // Hide loading state
            }
        } else {
            alert("Please select a valid image file (JPG, PNG, GIF).");
        }
    };

    // Function to trigger the file input
    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className='h-[87vh] bg-[#F9FAFBCC] dark:bg-[#121826] flex justify-center items-center'>
            <div 
                className="containerBox w-[50%] h-[400px] shadow-2xl bg-white dark:bg-gray-800 rounded-lg mx-auto flex justify-center items-center"
                onClick={triggerFileInput}
            >
                {loading ? (
                    <p className='text-[#121826] dark:text-[#F9FAFBCC]'>Uploading...</p>
                ) : selectedImage ? (
                    <img src={selectedImage} alt="Uploaded" className='w-full h-full object-cover rounded-lg' />
                ) : (
                    <div className='w-[98%] h-[96%] rounded-lg border-2 border-dashed border-[#E5E7EB] flex flex-col justify-center items-center space-y-3 cursor-pointer hover:opacity-60 hover:shadow-3xl'>
                        <img className='w-[40px] mb-2' src={uploadLogo} alt="Upload Icon" />
                        <p className='text-[#121826] dark:text-[#F9FAFBCC] text-[14px] font-semibold'>
                            Drag & Drop a file or <span className='text-[#3662E3]'>browse files</span>
                        </p>
                        <p className='text-[12px] text-[#4D5562] dark:text-[#F9FAFBCC]'>
                            JPG, PNG or GIF- Max file size 2MB
                        </p>
                    </div>
                )}
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleImageUpload}
                    accept="image/jpeg, image/png, image/gif"
                />
            </div>
        </div>
    );
};

export default MainPage;
