import React from 'react'

export default function About1() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      React development is driven by a vibrant community of passionate developers who continuously push the boundaries of web development. These developers are dedicated to creating intuitive, scalable, and efficient user interfaces. They love experimenting with React's component-based architecture, reusable code, and powerful ecosystem. The open-source nature of React encourages collaboration, where developers actively contribute to libraries, tools, and frameworks that enhance productivity. 
                      </p>
                      <p className="mt-4 text-gray-600">
                      Their commitment to clean, maintainable code and best practices fosters rapid innovation. Whether it's building small projects or large-scale applications, React developers are passionate about leveraging the framework’s flexibility and performance to deliver exceptional user experiences.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
