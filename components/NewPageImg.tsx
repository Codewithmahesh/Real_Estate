import { useState } from 'react';

export default function PropertyImageUpload() {
  const [thumbnails, setThumbnails] = useState<File[]>([]);

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setThumbnails((prev) => [...prev, ...Array.from(files)]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Property Image</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Main large image */}
        <div className="col-span-2">
          {thumbnails.length > 0 ? (
            <img
              src={URL.createObjectURL(thumbnails[0])}
              alt="Main Property Image"
              className="w-full h-64 rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          ) : (
            <div className="w-full h-64 rounded-lg bg-gray-100 flex justify-center items-center text-gray-400 text-lg">
              No image selected
            </div>
          )}
        </div>

        {/* Thumbnail images */}
        {thumbnails.slice(1).map((file, index) => (
          <div key={index} className="relative group">
            <img
              src={URL.createObjectURL(file)}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-32 rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Overlay for removing the image */}
            <button
              onClick={() => setThumbnails(thumbnails.filter((_, i) => i !== index + 1))}
              className="absolute top-2 right-2 bg-white rounded-full p-1 text-red-600 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100 hover:bg-red-50"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}

        {/* Add Property Image */}
        <div
          className="flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:border-gray-500 hover:bg-gray-50"
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <span className="text-gray-400 text-lg font-medium text-center">
            <i className="fas fa-plus-circle text-4xl mb-2"></i>
            <br />
            Add Property Image
          </span>
          <input
            id="file-input"
            type="file"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
            multiple
          />
        </div>

        {/* Display number of selected images */}
        {thumbnails.length > 0 && (
          <div className="col-span-2 mt-2 text-gray-500 text-sm">
            {thumbnails.length} image{thumbnails.length > 1 && 's'} selected.
          </div>
        )}
      </div>
    </div>
  );
}
