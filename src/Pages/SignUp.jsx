import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";
import { auth } from "../Firebase/firebase.init";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const validatePassword = (password) => {
  // Check minimum length
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    return false;
  }

  // Check maximum length
  if (password.length > 15) {
    toast.error("Password must not exceed 15 characters", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    return false;
  }

  // Check for at least one lowercase letter
  const hasLowercase = /[a-z]/.test(password);
  if (!hasLowercase) {
    toast.error("Password must contain at least one lowercase letter", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    return false;
  }

  // Check for at least one uppercase letter
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    toast.error("Password must contain at least one uppercase letter", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    return false;
  }

  // Check for at least one number
  const hasNumber = /\d/.test(password);
  if (!hasNumber) {
    toast.error("Password must contain at least one number", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    return false;
  }

  // Check for at least one special character
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  if (!hasSpecialChar) {
    toast.error("Password must contain at least one special character (@$!%*?&)", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    return false;
  }

  return true;
};

// Then use it in your signup function
if (!validatePassword(password)) {
  return;
}

createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
    console.log(res);
    toast.success("Successfully Signed Up!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    let errorMessage = "";

    if (errorCode === "auth/email-already-in-use") {
      errorMessage = "This email is already registered";
    } else if (errorCode === "auth/invalid-email") {
      errorMessage = "Invalid email address format";
    } else if (errorCode === "auth/operation-not-allowed") {
      errorMessage = "Email/password accounts are not enabled";
    } else if (errorCode === "auth/weak-password") {
      errorMessage = "Password is too weak";
    } else if (errorCode === "auth/network-request-failed") {
      errorMessage = "Network error. Please check your connection";
    } else if (errorCode === "auth/too-many-requests") {
      errorMessage = "Too many attempts. Please try again later";
    } else if (errorCode === "auth/user-disabled") {
      errorMessage = "This account has been disabled";
    } else if (errorCode === "auth/requires-recent-login") {
      errorMessage = "Please log in again to continue";
    } else if (errorCode === "auth/invalid-credential") {
      errorMessage = "Invalid credentials provided";
    } else if (errorCode === "auth/internal-error") {
      errorMessage = "An internal error occurred. Please try again";
    } else {
      errorMessage = error.message || "An error occurred during signup";
    }

    toast.error(errorMessage, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  });
  };
  return (
    <div className="min-h-[96vh] flex items-center justify-betweeb bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      <ToastContainer />
      {/* Animated floating circles */}
      <div className="container  mx-auto">
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Sign Up
            </h2>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className=" absolute  cursor-pointer top-[35px] right-2 z-50"
                >
                  {show ? <FaEye></FaEye> : <IoEyeOff />}
                </span>
              </div>

              <button type="submit" className="my-btn">
                Sign Up
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-pink-300 hover:text-white font-medium underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
