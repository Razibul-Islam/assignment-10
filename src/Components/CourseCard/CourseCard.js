import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const { image_url, price, title, rating } = course;
    

  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <img
        alt="Home"
        src={image_url}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">{price}</dd>
          </div>

          <div>
            <dt className="sr-only">Title</dt>

            <dd className="font-medium">{title}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center justify-between gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <FaStar className="text-yellow-600 text-lg"></FaStar>
            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="font-medium text-lg">{rating.number}</p>
            </div>
          </div>

          <button
            className="bg-blue-600 py-3 px-6 text-xl text-white rounded-md"
          >
            <Link to="/details" className="flex items-center">
              Details
              <FaArrowRight className="ml-1" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
