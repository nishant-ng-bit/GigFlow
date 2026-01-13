import { useState } from "react";
import { postGig } from "../api/gigs.api";
import toast from "react-hot-toast";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postGig(formData);
      setFormData({ title: "", description: "", budget: "" });
      toast.success("Gig posted successfully");
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Post a New Gig
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Build a React website"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border px-3 py-2 rounded"
            placeholder="Describe the job in detail"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Budget (₹)</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. 5000"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {/* {loading ? "Posting..." : "Post Job"} */}
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
