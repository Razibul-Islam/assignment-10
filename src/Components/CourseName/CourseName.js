import React from "react";
import { Link } from "react-router-dom";

const CourseName = ({ courseN }) => {
    const { title,_id } = courseN;
    return (
      <div>
        <h3 className="mt-5 text-xl">
          <Link to={`/course/${_id}`}>{title}</Link>
        </h3>
      </div>
    );
};

export default CourseName;
