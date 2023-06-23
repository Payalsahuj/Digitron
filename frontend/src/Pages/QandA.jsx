import { Card, Input, Textarea } from "@chakra-ui/react";
import { Navbar } from "../Component/Navbar";
import logo from "../Image/1-removebg-preview.png";

// const arr = ["aslam", "jignesh bhai", "krunal", "Yash", "payal", "shruti"];

export default function QandA() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "-45px" }}>
        <main className="container mx-auto flex justify-between h-screen border-2 border-black mt-5">
          <div className="w-2/12 p-2" style={{ border: "solid black" }}>
            <button className="p-3 w-full bg-gray-800 text-white">
              New Chat
            </button>
            <div className="flex-col" flexDirection={"column"}>
              {/* {arr.reverse().map((chat) => {
                return (
                  <div className="border-2 black text-xl mt-5 p-2">{chat}</div>
                );
              })} */}
            </div>
          </div>
          <div className="w-10/12">
            <div className="mt-10">
              <a
                style={{
                  marginTop: "50px",
                }}
                href="https://git.io/typing-svg"
              >
                <img
                  style={{
                    margin: "auto",
                    marginTop: "25px",
                    textAlign: "center",
                  }}
                  src="https://readme-typing-svg.demolab.com?size=40&pause=100&color=212121&repeat=false&width=1100&style=bold&height=70&lines=Welcome+to+Digitron+Q+and+A+Session..."
                  alt="Typing SVG"
                />
              </a>
            </div>
            <div className="">
              <img className="h-full mx-auto" src={logo} alt="Digitron" />
            </div>

            <h1 className="text-2xl">Feel Free to ask me anything</h1>
            <div className="border-2 border-black h-fit">
              <div>
                <Card border={"solid black"}></Card>
              </div>
              <input
                className="w-8/12 bg-gray-800 text-xl pt-3 pb-3 pl-5 text-slate-400 rounded-xl"
                type="text"
              />
              <button className="text-xl pt-3 pb-3 pl-6 pr-6 h-fit text-white bg-green-400 ml-3 rounded-xl">
                Send
              </button>
            </div>
          </div>
        </main>
        <footer className="bg-gray-200 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
