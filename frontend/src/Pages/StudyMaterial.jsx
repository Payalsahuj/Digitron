import { Navbar } from "../Component/Navbar"
import {MdKeyboardDoubleArrowRight} from "react-icons/md"

export const StudyMaterial = () => {

    return (
        <div>
            <Navbar/>
            <h1 className="font-bold text-4xl text-center mb-9 fixed left-0 right-0 bg-gray-100 p-4 z-10">Study Material</h1>
            <div className="flex">
                <div className="w-64 bg-gray-100 h-screen pt-10rem p-4 fixed mt-8 " >
                    <a href="#mern" className="block mt-8 font-bold text-2xl text-gray-700">MERN</a>
                    <a href="#java" className="block mt-8 font-bold text-2xl text-gray-700">JAVA</a>
                    <a href="#node" className="block mt-8 font-bold text-2xl text-gray-700">NODE</a>
                </div>
                <div id="content" style={{ marginLeft: "16rem", marginTop: "8rem", width: "80%" }}>
                <div className="p-4 z-50" id="basic">
                        <h2 className="text-3xl font-bold mb-2">Basics</h2>
                        {/* <p>This is the MERN section.</p> */}
                        <div className="mx-auto grid grid-cols-3 justify-between">
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">HTML</h2>
                                <p className="text-gray-300 text-justify">HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript). "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. </p>
                                <a className="text-blue-500 underline pt-2 px-2" onclick="myFunction()" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/HTML" >Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">JavaScript</h2>
                                <p className="text-gray-300 text-justify">JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">CSS</h2>
                                <p className="text-gray-300 text-justify">Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications.</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            {/* <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div> */}

                        </div>
                    </div>
                    <div className="p-4 z-50" id="mern">
                       <a href="https://www.mongodb.com/mern-stack"> <h2 className="text-3xl font-bold mb-2">MERN Section</h2></a>
                        <p className=" w-80 text-justify mx-auto">MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.</p>
                        <div className="mx-auto grid grid-cols-3 justify-between">
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                             </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>

                        </div>
                    </div>

                    <div className="p-4" id="java">
                        <h2 className="text-3xl font-bold mb-2">Java Section</h2>
                        <p className=" w-80 text-justify mx-auto">Java is a most popular, object-oriented, widely used programming language and platform that is utilized for Android development, web development, artificial intelligence, cloud applications, and much more. So, mastering this gives you great opportunities in bigger organizations.</p>
                        <div className="mx-auto grid grid-cols-3 justify-between">
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4" id="node">
                        <h2 className="text-3xl font-bold mb-2">Node Section</h2>
                        <p className=" w-80 text-justify mx-auto">Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</p>
                        <div className="mx-auto grid grid-cols-3 justify-between">
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                            <div className="mx-10 my-4 p-3 w-96 rounded-3xl shadow-xl bg-gray-800 text-gray-100">
                                <h2 className="text-2xl font-bold mb-2">Title</h2>
                                <p className="text-gray-300 text-justify">description</p>
                                 <a className="text-blue-500 underline float-right pt-2 px-2"  target="_blank"  href="">Read More <span><MdKeyboardDoubleArrowRight/></span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}