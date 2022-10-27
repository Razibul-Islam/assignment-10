import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Blog = () => {
    const {user } = useContext(AuthContext);
    return (
        <div>
            <h3>Blog { user.display_name}</h3>
        </div>
    );
};

export default Blog;