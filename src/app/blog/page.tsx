import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <Header />
      <div className="ml-80 pt-20">
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
                Blog
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Thoughts on AI, software development, and the intersection of technology and innovation.
              </p>
            </div>
          </section>

          {/* Featured Article */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AI/ML</span>
                <span className="text-gray-500 text-sm">December 15, 2024</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Building Scalable AI Systems: Lessons from Production
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                After building and deploying several AI systems in production, I've learned valuable lessons 
                about scalability, reliability, and maintainability. In this article, I share practical insights 
                on architecting AI systems that can handle real-world demands.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 text-sm">8 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Featured</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Read Article →
                </a>
              </div>
            </div>
          </section>

          {/* Recent Articles */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "The Future of Code: How AI is Transforming Development",
                  excerpt: "Exploring how AI tools like GitHub Copilot and GPT-4 are changing the way we write code and what it means for developers.",
                  category: "AI",
                  date: "December 12, 2024",
                  readTime: "6 min read"
                },
                {
                  title: "Optimizing React Performance: Advanced Techniques",
                  excerpt: "Deep dive into performance optimization strategies for React applications, from code splitting to memoization.",
                  category: "Development",
                  date: "December 8, 2024",
                  readTime: "10 min read"
                },
                {
                  title: "From Prototype to Production: Scaling Machine Learning Models",
                  excerpt: "A comprehensive guide to taking your ML models from Jupyter notebooks to production-ready systems.",
                  category: "AI/ML",
                  date: "December 5, 2024",
                  readTime: "12 min read"
                },
                {
                  title: "The Art of System Design: Building for Scale",
                  excerpt: "Key principles and patterns for designing systems that can handle millions of users and terabytes of data.",
                  category: "Architecture",
                  date: "December 1, 2024",
                  readTime: "8 min read"
                }
              ].map((article, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "AI/ML", count: 12, color: "blue" },
                { name: "Development", count: 8, color: "green" },
                { name: "Architecture", count: 6, color: "purple" },
                { name: "Career", count: 4, color: "orange" }
              ].map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className={`w-12 h-12 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className={`text-${category.color}-600 font-medium`}>{category.count}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.count} articles</p>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Get notified when I publish new articles about AI, software development, and tech trends. 
                No spam, just quality content delivered to your inbox.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Archive */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Archive</h2>
            <div className="space-y-4">
              {[
                { title: "Understanding Neural Networks: A Beginner's Guide", date: "November 28, 2024", category: "AI/ML" },
                { title: "Building Microservices with Node.js", date: "November 25, 2024", category: "Development" },
                { title: "The Psychology of User Experience Design", date: "November 22, 2024", category: "Design" },
                { title: "Deploying Applications with Docker and Kubernetes", date: "November 18, 2024", category: "DevOps" },
                { title: "Data Structures Every Developer Should Know", date: "November 15, 2024", category: "Development" }
              ].map((post, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {post.category}
                    </span>
                    <div>
                      <h3 className="text-gray-900 font-medium">{post.title}</h3>
                      <p className="text-gray-500 text-sm">{post.date}</p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    Read →
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog; 