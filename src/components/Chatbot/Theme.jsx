import React from "react";
import { ThemeProvider } from "styled-components";
import Chatbot from "./Chatbot";

const theme = {
  background: "#fff7d6",
  fontFamily: "Helvetica ",
  headerBgColor: "#ffd500",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#242151",
  botFontColor: "#fff",
  userBubbleColor: "#F2F3F4",
  userFontColor: "#000",
//   userBubbleColor: "yellow",

};

function Theme() {
  return (
    <ThemeProvider theme={theme}>
      <Chatbot />;
    </ThemeProvider>
  );
}

export default Theme;
