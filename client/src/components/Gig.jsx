import { useState } from "react";
import { postBid } from "../api/bids.api";
import toast from "react-hot-toast";
import { useAuth } from "../providers/authProvider";
import { Link } from "react-router-dom";

const Gig = ({ gigId, title, description, budget, ownerId }) => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const submitHandler = async () => {
    try {
      if (!message) throw new Error("Message is required");

      await postBid({ gigId, message });
      toast.success("Bid placed successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full bg-white text-slate-800 rounded-lg shadow p-5 hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-sm text-slate-600 mb-4 line-clamp-3">{description}</p>

      <div className="flex justify-between items-center">
        <span className="font-medium text-blue-600">₹ {budget}</span>
      </div>
      <div className="flex justify-between">
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          name="message"
          id="message"
          placeholder="Enter you msg"
          value={message}
          className="bg-amber-600 border"
        />
        <button
          onClick={submitHandler}
          className="px-4 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Apply
        </button>
      </div>
      <div className="mt-2">
        {user && user._id === ownerId && (
          <Link
            to={`/bids/${gigId}`}
            className="px-4 py-1 w-full text-sm rounded bg-green-600 text-white hover:bg-green-800 transition"
          >
            Check Bids
          </Link>
        )}
      </div>
    </div>
  );
};

export default Gig;
