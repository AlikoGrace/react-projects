const Review = ({ formData }) => {
  return (
    <div className="w-full mx-auto max-w-md border-1/2 p-6 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-semibold mb-4">Review Your Information</h2>

      <div className="mb-2">
        <strong>First Name:</strong> {formData.firstName}
      </div>
      <div className="mb-2">
        <strong>Surname:</strong> {formData.surName}
      </div>
      <div className="mb-2">
        <strong>Other Name:</strong> {formData.otherName}
      </div>
      <div className="mb-2">
        <strong>Gender:</strong> {formData.gender}
      </div>
      <div className="mb-2">
        <strong>Email:</strong> {formData.email}
      </div>
      <div className="mb-2">
        <strong>Phone:</strong> {formData.contact}
      </div>

      {/* Submit Button */}
      <button
        onClick={() => alert("Form submitted successfully!")}
        className="w-full mt-4 py-2 px-4 bg-green-700 text-white rounded-xl font-semibold cursor-pointer border-2
         hover:bg-green-800 transition duration-200 ease-in-out">
        Submit
      </button>
    </div>
  );
};

export default Review;
