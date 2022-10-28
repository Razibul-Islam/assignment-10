import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          rel="noopener noreferrer"
          to="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              UpComing Courses...
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Go Programming Language
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 21, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://www.jrebel.com/sites/default/files/image/2021-01/what%20is%20kotlin%20banner%20image.png"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Kotlin Programming Language
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 22, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Machine Learning
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 23, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://reactjs.org/logo-og.png"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                React Js
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 24, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--cKHeGzUo--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uf3a8y7xh8aroo95qocz.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                TypeScript Programming Language
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 25, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://miro.medium.com/max/750/1*OgeU8HPo8TFF1cZQ-4XjJw.jpeg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Swift Programming Language
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 26, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Blog;
