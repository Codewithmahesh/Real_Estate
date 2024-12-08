// pages/newPostPage.js or pages/newPostPage.tsx
import Wrapper from "@/components/Wrapper";

function NewPostPage() {
  return (
    <Wrapper>
      <div className="w-full p-10 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Add New Post</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Row */}
            <div className="col-span-1">
              <label htmlFor="title" className="block font-semibold">Title</label>
              <input id="title" name="title" type="text" className="w-full p-3 border rounded-md" />
            </div>
            <div className="col-span-1">
              <label htmlFor="price" className="block font-semibold">Price</label>
              <input id="price" name="price" type="number" className="w-full p-3 border rounded-md" />
            </div>
            <div className="col-span-1">
              <label htmlFor="address" className="block font-semibold">Address</label>
              <input id="address" name="address" type="text" className="w-full p-3 border rounded-md" />
            </div>

            {/* Second Row (Description) */}
            <div className="col-span-3">
              <label htmlFor="desc" className="block font-semibold">Description</label>
              <textarea id="desc" name="desc" rows={4} className="w-full p-3 border rounded-md"></textarea>
            </div>

            {/* Third Row */}
            <div className="col-span-1">
              <label htmlFor="city" className="block font-semibold">City</label>
              <input id="city" name="city" type="text" className="w-full p-3 border rounded-md" />
            </div>
            <div className="col-span-1">
              <label htmlFor="bedroom" className="block font-semibold">Bedroom Number</label>
              <input id="bedroom" name="bedroom" type="number" className="w-full p-3 border rounded-md" />
            </div>
            <div className="col-span-1">
              <label htmlFor="bathroom" className="block font-semibold">Bathroom Number</label>
              <input id="bathroom" name="bathroom" type="number" className="w-full p-3 border rounded-md" />
            </div>

            {/* Fourth Row */}
            <div className="col-span-1">
              <label htmlFor="latitude" className="block font-semibold">Latitude</label>
              <input id="latitude" name="latitude" type="text" className="w-full p-3 border rounded-md" />
            </div>
            <div className="col-span-1">
              <label htmlFor="longitude" className="block font-semibold">Longitude</label>
              <input id="longitude" name="longitude" type="text" className="w-full p-3 border rounded-md" />
            </div>
            <div className="col-span-1">
              <label htmlFor="type" className="block font-semibold">Type</label>
              <select name="type" className="w-full p-3 border rounded-md">
                <option value="rent" defaultChecked>Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>

            {/* Fifth Row */}
            <div className="col-span-1">
              <label htmlFor="property" className="block font-semibold">Property</label>
              <select name="property" className="w-full p-3 border rounded-md">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="col-span-1">
              <label htmlFor="utilities" className="block font-semibold">Utilities Policy</label>
              <select name="utilities" className="w-full p-3 border rounded-md">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="col-span-1">
              <label htmlFor="pet" className="block font-semibold">Pet Policy</label>
              <select name="pet" className="w-full p-3 border rounded-md">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>

            {/* Sixth Row */}
            <div className="col-span-1">
              <label htmlFor="income" className="block font-semibold">Income Policy</label>
              <input id="income" name="income" type="text" className="w-full p-3 border rounded-md" placeholder="Income Policy" />
            </div>
            <div className="col-span-1">
              <label htmlFor="size" className="block font-semibold">Total Size (sqft)</label>
              <input id="size" name="size" type="number" className="w-full p-3 border rounded-md" />
            </div>
            <div className="col-span-1">
              <label htmlFor="school" className="block font-semibold">School</label>
              <input id="school" name="school" type="number" className="w-full p-3 border rounded-md" />
            </div>

            {/* Submit Button */}
            <div className="col-span-3 flex justify-center mt-6">
              <button type="submit" className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-md">Add</button>
            </div>
          </form>

          {/* Image Section */}
          <aside className="hidden md:flex items-center justify-center">
            <img src="/path-to-your-image.jpg" alt="New Post Image" className="rounded-md w-full h-full object-cover" />
          </aside>
        </div>
      </div>
    </Wrapper>
  );
}

export default NewPostPage;
