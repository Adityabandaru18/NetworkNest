import logo1 from "../assets/logo (2).png";
import { useState } from "react";
import title from "../assets/title.png";
import "./styles.css";
import { app1 } from "../firebase/Firebase.js";
import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeLogin } from "../redux/slices/Loginslice.js";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { addadmin } from "../redux/slices/adminslice.js";
import { AddToken } from "../redux/slices/tokenslice.js";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailL, setEmailL] = useState("");
  const [passL, setPassL] = useState("");
  const [showError, setShowError] = useState("");
  const [show, setShow] = useState(false);
  const [admin, setadmin] = useState("");
  // const t_found = useSelector(state => state.addpost);
  // console.log(t_found);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = getAuth(app1);
  const provider1 = new GoogleAuthProvider();
  const provider2 = new GithubAuthProvider();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userC) => {
        dispatch(ChangeLogin("Log out"));
        dispatch(AddToken(userC.user.uid));
        // dispatch(token_found(token));
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setShowError(error.message);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, emailL, passL)
      .then((userC) => {
        dispatch(ChangeLogin("Log out"));
        dispatch(AddToken(userC.user.uid));
      })
      .catch((e) => {
        setShowError(e.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider1)
      .then((userC) => {
        dispatch(ChangeLogin("Log out"));
        dispatch(AddToken(userC.user.uid));    
        setShow(true);
      })
      .catch((error) => {
        setShowError(error);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, provider2)
      .then((userC) => {
        dispatch(ChangeLogin("Log out"));
        dispatch(AddToken(userC.user.uid));
        setShow(true);
      })
      .catch((error) => {
        setShowError(error);
      });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="flex flex-row justify-evenly items-center w-[100%] h-[100vh]">
        <div className="image">
          <img src={logo1} />
        </div>
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <img src={title} className="title_image max-w-[40px] ml-4" />
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {isLogin ? "Log in to your account" : "Sign up for an account"}
              </h2>
            </div>

            {isLogin ? (
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    value={emailL}
                    onChange={(e) => setEmailL(e.target.value)}
                    autoComplete="true"
                    required
                    className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={passL}
                    onChange={(e) => setPassL(e.target.value)}
                    autoComplete="true"
                    required
                    className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <br />
                <div>
                  <button
                    onClick={handleLogin}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Log in
                  </button>
                </div>
                <br />
                <div>
                  {showError ? (
                    <Alert status="error">
                      <AlertIcon />
                      {showError}
                    </Alert>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="true"
                    required
                    className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    autoComplete="true"
                    required
                    className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <br />
                <div>
                  <button
                    onClick={handleSignUp}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
                <br />
                <div>
                  {showError ? (
                    <Alert status="error">
                      <AlertIcon />
                      {showError}
                    </Alert>
                  ) : null}
                </div>
              </div>
            )}

            <div className="text-center flex flex-col justify-between items-center">
              <div>
                <p className="mt-2 text-sm text-gray-600">
                  {isLogin
                    ? "New to our platform? "
                    : "Already have an account? "}
                  <button
                    onClick={toggleForm}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {isLogin ? " Sign up now" : " Log in"}
                  </button>
                </p>
              </div>
              <br />
              <div>
                <GoogleLoginButton onClick={handleGoogleLogin} />
              </div>
              <div>
                <GithubLoginButton onClick={handleGithubLogin} />
              </div>
            </div>
          </div>
        </div>

        {/* Modal for the username */}

        {show && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 backdrop-blur-lg">
            <div className="modal-box bg-gray-800 max-w-md mx-auto p-7 rounded-lg shadow-lg text-white">
              <div className="mt-4">
                <label htmlFor="username" className="text-gray-300 mb-3">
                  What should we call you :)
                </label>
                <br />
                <input
                  type="text"
                  id="username"
                  value={admin}
                  onChange={(e) => setadmin(e.target.value)}
                  className="block w-full px-4 py-2 mt-5 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  className="btn bg-blue-500 hover:bg-blue-600  px-8 py-1 mt-4 rounded"
                  onClick={() => {
                    if (admin != "") {
                      setShow(false);
                      dispatch(addadmin(admin));
                      navigate("/");
                    }
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
