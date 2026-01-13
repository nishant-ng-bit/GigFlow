import { Link } from "react-router-dom";
import Form from "../components/Form";
import { loginUser } from "../api/auth.api";
import { useAuth } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setUser } = useAuth();

  if (isAuthenticated) {
    navigate("/");
  }
  const submitHandler = async (data) => {
    try {
      const user = await loginUser(data);
      setUser(user);
      navigate("/");
      toast.success("Logged in successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue to GigFlow
        </p>

        <Form onSubmit={submitHandler} type="login" />

        <p className="text-sm text-center text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
