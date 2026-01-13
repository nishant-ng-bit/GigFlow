import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { registerUser } from "../api/auth.api";
import { useAuth } from "../providers/authProvider";
import { useEffect } from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setUser } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });
  const submitHandler = async (data) => {
    try {
      const user = await registerUser(data);
      setUser(user);
      navigate("/");
      toast.success("Account created successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join GigFlow and start posting or applying for gigs
        </p>

        <Form onSubmit={submitHandler} type="register" />

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
