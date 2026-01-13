import { useEffect, useState } from "react";
import { getAllBids, hireBid } from "../api/bids.api";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const BidsPage = () => {
  const { gigId } = useParams();
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isHiring, setIsHiring] = useState(false);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await getAllBids(gigId);
        setBids(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (gigId) fetchBids();
  }, [gigId, isHiring]);

  if (loading) {
    return <p className="text-center mt-10">Loading bids...</p>;
  }

  const hireUser = async (bidId) => {
    try {
      setIsHiring(true);
      const response = await hireBid(bidId);
      console.log(response);
      toast.success("Bid Hired Successfully");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setIsHiring(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 text-white p-6">
      <h1 className="text-3xl font-semibold mb-6">Bids</h1>

      {bids.length === 0 ? (
        <p>No bids yet</p>
      ) : (
        <div className="space-y-4">
          {bids.map((bid) => (
            <div
              key={bid._id}
              className="bg-white text-slate-800 p-4 rounded shadow font-medium text-lg"
            >
              <p className="mb-2">{bid.message}</p>
              <div className="text-sm text-gray-500">Status: {bid.status}</div>
              <div className="text-sm text-gray-500">
                BidderId: {bid.freelancerId}
              </div>
              {bid.status === "pending" && (
                <button
                  disabled={isHiring}
                  onClick={() => hireUser(bid._id)}
                  className="w-fit p-2 px-4 rounded-2xl bg-green-500 hover:bg-green-700"
                >
                  {isHiring ? "Hiring..." : "Hire"}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BidsPage;
