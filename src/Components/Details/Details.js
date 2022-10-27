import React from "react";
import { FaDownload, FaEye, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Details = () => {
  const course = useLoaderData();
  console.log(course);
  const {
    details,
    image_url,
    name,
    price,
    rating,
    seller,
    title,
    total_view,
    Instructor,
  } = course;
  return (
    <section className="relative bg-blue-400">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {name} Programming Language
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">{title}</p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="buy"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Buy for {price}
            </Link>
          </div>
        </div>
        <div
          ref={ref}
          className="bg-white text-black lg:ml-14 max-h-[600px] overflow-auto"
        >
          <div className="p-6 space-y-6">
            <div className="text-base leading-relaxed">
              <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                  <img
                    src={Instructor.img}
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-center md:text-left">
                      {Instructor.name}
                    </h4>
                    <p className="dark:text-gray-400">
                      <span>Video: {Instructor.video}</span>
                      <p className="flex items-center">
                        Rating: <FaStar className="text-yellow-600 mx-2" />
                        {Instructor.Instructor_rating}
                      </p>
                      <p className="bg-yellow-300 rounded-sm text-black text-center">
                        {seller ? seller : ""}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-base leading-relaxed">
              <img src={image_url} className="h-48" alt="" />
              <p className="flex items-center">
                <span className="flex items-center">
                  Rating: <FaStar className="text-yellow-600 mx-2" />
                </span>
                {rating.number}
              </p>
              <p className="flex items-center">
                Total View: <FaEye className="mx-2" />
                {total_view}
              </p>
              <p className="flex items-center">
                <span className="mr-2">Price: {price}</span>
                <Pdf targetRef={ref} filename="code-example.pdf">
                  {({ toPdf }) => <FaDownload onClick={toPdf} />}
                </Pdf>
              </p>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p>
                <strong>Details about {name} programming language: </strong>
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
