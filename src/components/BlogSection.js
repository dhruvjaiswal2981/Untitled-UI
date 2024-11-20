import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  const blogs = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: {
        name: "Olivia Rhye",
        date: "20 Jan 2024",
        image: "/images/Avatar.png",
      },
      image: "/images/Image.png",
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: {
        name: "Phoenix Baker",
        date: "19 Jan 2024",
        image: "/images/Avatar (1).png",
      },
      image: "/images/Image (1).png",
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: {
        name: "Lana Steiner",
        date: "18 Jan 2024",
        image: "/images/Avatar (2).png",
      },
      image: "/images/Image (2).png",
    },
  ];

  return (
    <section className="blog-section">
      <header className="blog-header">
        <div>
            <h2>Our blog</h2>
            <h3>Lastest blog posts</h3>
            <p>
            Tools and strategies modern teams need to help their companies grow.
            </p>
        </div>
        <div className="view-all-container">
            <a href="#all-posts" className="view-all">
            View all posts
            </a>
        </div>
      </header>

      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.category} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">{blog.category}</span>
              <h4 className="blog-title">
                {blog.title}{" "}
                <span className="blog-arrow" role="img" aria-label="arrow">
                  ↗
                </span>
              </h4>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-author">
                <img
                  src={blog.author.image}
                  alt={blog.author.name}
                  className="author-image"
                />
                <div>
                  <p className="author-name">{blog.author.name}</p>
                  <p className="author-date">{blog.author.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
