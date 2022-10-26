import React from "react";
import { Link } from "react-router-dom";

const CourseName = ({ courseN }) => {
    const { title } = courseN;
    return (
      <div>
        <h3 className="mt-5 text-xl">
          <Link to="/details">{title}</Link>
        </h3>
      </div>
    );
};

export default CourseName;
