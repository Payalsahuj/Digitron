import { Box } from "@chakra-ui/react";
import video from "../Image/DIGITRON-black.mp4";
import { Dashboard } from "./Dashboard";
import { useState } from "react";

export function Welcome() {
  const [time, settime] = useState(false);

  setTimeout(() => {
    settime(true);
  }, 4000);
  return (
    <Box>
      {time ? (
        <Dashboard />
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"black"}
          height={"100vh"}
        >
          <video style={{ objectFit: "cover" }} src={video} autoPlay muted />
        </Box>
      )}{" "}
    </Box>
  );
}
