import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import CourseName from "../CourseName/CourseName";

const Course = () => {
  const courses = useLoaderData();
//   console.log(courses);
  return (
    <div>
      <div className="h-96 bg-blue-200 flex items-center justify-center">
        <h1 className="text-6xl font-semibold capitalize">
          learn a new programming language
        </h1>
      </div>
      <div className="bg-blue-200 flex justify-center items-center">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-12">
          <div className="bg-blue-500 col-span-4 h-[702px] md:sticky top-[90px] p-5 rounded-tl-lg">
            {courses.map((courseN) => (
              <CourseName key={courseN._id} courseN={courseN}></CourseName>
            ))}
          </div>
          <div className="bg-blue-400 col-span-8   overflow-y-auto p-5 rounded-tr-lg">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              {courses.map((course) => (
                <CourseCard key={course._id} course={course}></CourseCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
