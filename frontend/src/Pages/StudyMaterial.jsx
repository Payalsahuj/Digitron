import { Navbar } from "../Component/Navbar"
import {MdKeyboardDoubleArrowRight} from "react-icons/md"

export const StudyMaterial = () => {

    return (
        <div>
            <Navbar/>
            <h1 className="font-bold text-4xl text-center mb-9 fixed left-0 right-0 mt-16 bg-gray-100 p-4 z-10">Study Material</h1>
            <div className="flex">
                <div className="w-64 bg-gray-100 h-screen pt-10rem p-4 fixed mt-8 " >
                    <a href="#mern" className="block mt-8 font-bold text-2xl text-gray-700">MERN</a>
                    <a href="#java" className="block mt-8 font-bold text-2xl text-gray-700">JAVA</a>
                    <a href="#node" className="block mt-8 font-bold text-2xl text-gray-700">NODE</a>
                </div>
                <div id="content" style={{ marginLeft: "16rem", marginTop: "8rem", width: "80%" }}>
                <div className="p-4 z-50" id="basic">
                        <h2 className="text-3xl font-bold mb-2">BASICS</h2>
                        {/* <p>This is the MERN section.</p> */}
                        <div className="mx-auto grid grid-cols-3 justify-between">
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">HTML</h2>
                                <p className="text-gray-300 text-justify">HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript). "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. </p>
                                <a className="text-blue-500 underline float-right pt-2 px-2 flex" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/HTML" >Read More <span className="my-1.5" ><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">JavaScript</h2>
                                <p className="text-gray-300 text-justify">JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">CSS</h2>
                                <p className="text-gray-300 text-justify">Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                        {/*<div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div> */}

                        </div>
                    </div>
                    <div className="p-4 z-50" id="mern">
                       <a target="_blank" href="https://www.mongodb.com/mern-stack"> <h2 className="text-3xl font-bold mb-2">MERN SECTION</h2></a>
                        <p className=" w-80 text-justify mx-auto">MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.</p>
                        <div className="mx-auto grid grid-cols-3 justify-between">
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">MongoDB</h2>
                                <p className="text-gray-300 text-justify">MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDb uses JSON-like documents with optional schemas and is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions. MongoDB is a member of the MACH Alliance.</p>
                                <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.w3schools.com/mongodb/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                             </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Express.js</h2>
                                <p className="text-gray-300 text-justify">Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://expressjs.com/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">React</h2>
                                <p className="text-gray-300 text-justify">React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components. React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.w3schools.com/REACT/DEFAULT.ASP">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Node.js</h2>
                                <p className="text-gray-300 text-justify">Node.js is an open source server environment. Node.js allows you to run JavaScript on the server. Node.js is an open source server environment which is free and runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). It basically uses callbacks, being an asynchronous platform, it does not wait around like database query, file I/O to complete.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.w3schools.com/nodejs/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Redux</h2>
                                <p className="text-gray-300 text-justify">Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. Since mid-2016, the primary maintainers are Mark Erikson and Tim Dorr. </p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://redux.js.org/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">TypeScript</h2>
                                <p className="text-gray-300 text-justify">JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript. In JavaScript, function parameters and variables don't have any information. TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.w3schools.com/typescript/typescript_intro.php">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            {/* <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div> */}

                        </div>
                    </div>

                    <div className="p-4" id="java">
                        <a target="_blank" href="https://www.scientecheasy.com/2018/05/core-java-syllabus.html/"><h2 className="text-3xl font-bold mb-2">JAVA SECTION</h2></a>
                        <p className=" w-80 text-justify mx-auto">Java is a most popular, object-oriented, widely used programming language and platform that is utilized for Android development, web development, artificial intelligence, cloud applications, and much more. So, mastering this gives you great opportunities in bigger organizations.</p>
                        <div className="mx-auto grid grid-cols-3 justify-between">
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Spring</h2>
                                <p className="text-gray-300 text-justify">The Spring framework can be considered as a collection of sub-frameworks, also called layers, such as Spring AOP. Spring Object-Relational Mapping (Spring ORM). Spring Web Flow, and Spring Web MVC. It is a lightweight application framework used for developing enterprise applications. Spring framework is loosely coupled because of dependency Injection.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.geeksforgeeks.org/introduction-to-spring-framework/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Hybernate</h2>
                                <p className="text-gray-300 text-justify">Hibernate is a framework which provides some abstraction layer, meaning that the programmer does not have to worry about the implementations, Hibernate does the implementations for you internally like Establishing a connection with the database, writing query to perform CRUD operations etc. It is a java framework which is used to develop persistence logic.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.geeksforgeeks.org/introduction-to-hibernate-framework/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">OOPs</h2>
                                <p className="text-gray-300 text-justify"> Object-Oriented Programming (OOPs) refers to languages that use objects in programming, they use objects as a primary source to implement what is to happen in the code. Objects are seen by the viewer or user, performing tasks assigned by you. Object-oriented programming aims to implement real-world entities like inheritance, hiding, polymorphism etc. in programming.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Constructor</h2>
                                <p className="text-gray-300 text-justify">Java constructors or constructors in Java is a terminology used to construct something in our programs. A constructor in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes. It is a special type of method that is used to initialize the object.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.geeksforgeeks.org/constructors-in-java/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Modifiers</h2>
                                <p className="text-gray-300 text-justify">Modifiers are divide into two groups: Access modifiers, Non-Access modifiers. Access modifiers help to restrict the scope of a class, constructor, variable, method, or data member.There are four types of access modifiers. Non Access Modifiers are the keywords introduced in Java 7 to notify JVM about a class's behaviour, methods or variables, etc.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.w3schools.com/java/java_modifiers.asp">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Method Overloading</h2>
                                <p className="text-gray-300 text-justify">Method Overloading allows different methods to have the same name, but different signatures where the signature can differ by the number of input parameters or its types, or a mixture of both. It is also known as Compile-time Polymorphism, Static Polymorphism, or Early binding in Java. In it is compared to parent argument, child argument will get the highest priority. </p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4" id="node">
                        <a target="_blank" href="https://nodejs.dev/en/learn/"><h2 className="text-3xl font-bold mb-2">NODE SECTION</h2></a>
                        <p className=" w-80 text-justify mx-auto">Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</p>
                        <div className="mx-auto grid grid-cols-3 justify-between">
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">SQL</h2>
                                <p className="text-gray-300 text-justify">Structured Query Language(SQL), is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system. Although SQL is an ANSI/ISO standard, there are different versions of the SQL language.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.w3schools.com/sql">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">NoSQL</h2>
                                <p className="text-gray-300 text-justify">A NoSQL database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. Such databases have existed since the late 1960s, but the name "NoSQL" was only coined in the early 21st century, triggered by the needs of Web 2.0 companies. The term NoSQL originally referred to “non-SQL”. </p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.geeksforgeeks.org/introduction-to-nosql/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">AWS</h2>
                                <p className="text-gray-300 text-justify">Amazon Web Services(AWS), Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Oftentimes, clients will use this in combination with autoscaling.Build, Deploy, and Manage Websites, Apps or Processes On AWS Secure, Reliable Network.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://en.wikipedia.org/wiki/Amazon_Web_Services">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Redis</h2>
                                <p className="text-gray-300 text-justify">Redis is an Open Source store for storing data structures. It is used in multiple ways. It is used as a database, cache, and message broker. It can store data structures such as strings, hashes, sets, sorted sets, bitmaps, indexes, and streams. Redis is very useful for Node.js developers as it reduces the cache size which makes the application more efficient.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.geeksforgeeks.org/node-js-redis-module/">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">RESTful API</h2>
                                <p className="text-gray-300 text-justify">REST stands for REpresentational State Transfer. Web services based on REST Architecture are known as RESTful web services. These webservices uses HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier a service, which provides resource representation such as JSON and set of HTTP Methods.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Middleware</h2>
                                <p className="text-gray-300 text-justify">Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.Middleware can also send the response to the server before the request.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2 flex"  target="_blank"  href="https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm">Read More <span className="my-1.5"><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}