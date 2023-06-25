import { Card, CardBody, Input, Textarea } from "@chakra-ui/react";
import { Navbar } from "../Component/Navbar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const arr = [];
export default function QandA() {
  const inputRef = useRef();
  const you = "you";
  const ai = "ai";
  const [loading, setLoading] = useState(false);
  const [qna, setQnA] = useState([]); // [{from:"you", value:""}, {from:"ai", value:""}]

  const updateQandA = (from, value) => {
    setQnA((qna) => [...qna, { from, value }]);
  };

  const askQuestion = async () => {
    const msg = inputRef.current.value;
    if (msg == "") {
      alert("Please enter valid input");
      return;
    }
    updateQandA(you, msg);
    console.log(msg);
    setLoading(true);
    axios
      .post("https://hackathon-o2kz.onrender.com/chat/generalChat", {
        msg,
      })
      .then((res) => {
        updateQandA(ai, res.data);
        arr.unshift(msg);
      })
      .finally(() => setLoading(false));
  };

  const renderContent = (qna) => {
    const value = qna.value;
    if (Array.isArray(value)) {
      return value.map((el) => {
        return el;
      });
    }
    return <p>{value}</p>;
  };

  useEffect(() => {
    console.log("refresh");
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "60px" }} className="">
        <div className="flex h-screen">
          <div className="flex-none w-2/12 bg-gray-200 p-4 ">
            {/* Sidebar content goes here */}
            <button
              className="p-3 w-full bg-gray-800 text-white"
              onClick={() => document.getElementById("question").focus()}
            >
              New Chat
            </button>
            <div className="flex-col" flexDirection={"column"}>
              {arr.map((chat) => {
                return (
                  <div id="sidebar" className="border-2 black text-xl mt-5 p-2">
                    {chat}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <div className="bg-gray-100 p-4">
              {/* Chat header content goes here */}
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
              <h1 className="text-2xl">Feel Free to ask me anything</h1>
            </div>
            <div className="flex-grow bg-white p-4 overflow-y-auto">
              {/* Chat messages go here */}
              <div>
                <Card p={"5"} border={"dashed grey 1px"} m={"5"} h={"100%"}>
                  <CardBody pl={"2"} w={"98%"} m={"auto"} textAlign={"left"}>
                    {qna.map((el) => {
                      if (el.from === you) {
                        return (
                          <div className="p-3 bg-slate-400 rounded-lg mb-5 mt-5">
                            {renderContent(el)}
                          </div>
                        );
                      } else {
                        return (
                          <div className="p-3 bg-gray-800 text-white rounded-lg">
                            {renderContent(el)}
                          </div>
                        );
                      }
                    })}
                    {loading && (
                      <div className="p-3 bg-gray-800 text-white rounded-lg">
                        Typing...
                      </div>
                    )}
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="bg-gray-600 p-4">
              <div className="flex items-center">
                <input
                  id="question"
                  ref={inputRef}
                  type="text"
                  placeholder="Type a message"
                  className="py-2 px-4 border rounded flex-grow"
                />
                <button
                  className="py-2 px-4 bg-blue-500 text-white rounded ml-2"
                  onClick={askQuestion}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
