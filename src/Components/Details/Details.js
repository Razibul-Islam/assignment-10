import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            Hello {course.name}
        </div>
    );
};

export default Details;