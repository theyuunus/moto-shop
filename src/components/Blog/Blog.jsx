import React, { useEffect, useState } from 'react';
import './Blog.scss';
import axios from 'axios';

export default function Blog() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6060/blog');
        const data = response.data;
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleReadMore = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, showAll: !blog.showAll } : blog
      )
    );
  };

  return (
    <React.Fragment>
      <div className="blog">
        <main className="blog-main">
          {blogs &&
            blogs.map((blog) => (
              <React.Fragment key={blog.id}>
                <div className="blog-main-cards">
                  <img
                    className="blog-main-cards-img"
                    src={
                      blog.img
                        ? process.env.PUBLIC_URL + '/images/' + blog.img
                        : ''
                    }
                    alt=""
                  />
                  <div className="blog-main-cards-div">
                    <h1 className="blog-main-cards-div-title">{blog.title}</h1>
                    <p className="blog-main-cards-div-text">
                      {blog.showAll
                        ? blog.text
                        : blog.text.split(' ').slice(0, 40).join(' ')}
                    </p>
                    <p
                      className="blog-main-cards-div-button"
                      onClick={() => handleReadMore(blog.id)}
                    >
                      Read {blog.showAll ? 'Less' : 'More'}
                    </p>
                  </div>
                </div>
                <div className="blog-main-line"></div>
              </React.Fragment>
            ))}
        </main>
      </div>
    </React.Fragment>
  );
}
