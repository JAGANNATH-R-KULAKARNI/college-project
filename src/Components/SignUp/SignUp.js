import { LockClosedIcon } from "@heroicons/react/20/solid";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpUI(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  async function onSubmitHandlerJ(e) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        console.log("Successful sign up");
        console.log(u);
        props.setSignedUp(true);
        navigate("/signin");
      })
      .catch((err) => {
        console.log("Unsuccessful sign up");
        console.log(err);
        navigate("/signup");
      });
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8 -mt-20">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2
              className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
              style={{ color: "white" }}
            >
              Create an account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                style={{ color: "white" }}
              >
                Multi factor authentication
              </a>
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="    Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="    Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm">
                <a
                  href="/signin"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  style={{ color: "white" }}
                >
                  Have an account ? Log In
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={onSubmitHandlerJ}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={{ color: "black", backgroundColor: "white" }}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-black-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                    style={{ color: "black" }}
                  />
                </span>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
