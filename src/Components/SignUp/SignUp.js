import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, emailVerification, profileUpdate } =
    useContext(AuthContext);

  const handleCreateUser = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        verify();
        updateUserProfile(name,photoURL)
      })
      .catch((error) => console.error(error));
    
    const verify = () => {
      emailVerification()
        .then(() => {})
        .catch((error) => console.error(error));
    }

    const updateUserProfile = (name,photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      profileUpdate(profile)
        .then(() => { })
        .catch(() => { })
    }
  };

  return (
    <div className="bg-grey-100 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={handleCreateUser}
          className="bg-gray-100 px-6 py-8 rounded shadow-md text-black w-full"
        >
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-100 w-full p-3 rounded mb-4"
            name="name"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="block border border-grey-100 w-full p-3 rounded mb-4"
            name="photoURL"
            placeholder="PhotoURL"
          />

          <input
            type="text"
            className="block border border-grey-100 w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-100 w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
          >
            Create Account
          </button>
        </form>

        <div className="text-grey-900 mt-6">
          Already have an account?
          <Link
            className="no-underline hover:underline border-b border-blue text-blue"
            to="/login"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
