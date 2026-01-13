import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useEffect, useState } from "react";
import { getGigs } from "../api/gigs.api";
import Gig from "../components/Gig";

const HomePage = () => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const data = await getGigs();
        setGigs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGigs();
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-3">GigFlow</h1>
        <p className="text-slate-300 max-w-xl mx-auto">
          A simple freelance marketplace where clients post gigs and freelancers
          get hired.
        </p>

        {!isAuthenticated && (
          <div className="flex justify-center gap-4 mt-6">
            <Link
              to="/login"
              className="px-6 py-2 rounded border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-6 py-2 rounded border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition"
            >
              Register
            </Link>
          </div>
        )}

        {isAuthenticated && (
          <Link to="/post-gig" className="inline-block mt-6">
            <button className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition">
              Post a Gig
            </button>
          </Link>
        )}
      </div>

      <div className="max-w-5xl mx-auto">
        {loading ? (
          <p className="text-center text-slate-400">Loading gigs...</p>
        ) : gigs.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gigs.map((gig) => (
              <Gig
                key={gig._id}
                gigId={gig._id}
                title={gig.title}
                description={gig.description}
                budget={gig.budget}
                ownerId={gig.ownerId}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400">No gigs found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
