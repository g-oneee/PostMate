import { Button, Card, TextField, Typography } from "@mui/material";
import SplitBar from "./components/SplitBar";
import Navbar from "./components/Navbar";

import { useState } from "react";
import axios from "axios";
import TextareaAutosize from "@mui/material/TextareaAutosize";
// const options = ["GET", "POST", "DELETE", "PUT"];

function App() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("POST");
  const [authorization, setAuthorization] = useState(null);
  const [body, setBody] = useState("");
  const [respone, setResponse] = useState("response");

  const handleClick = async () => {
    if (!url) {
      console.log("please enter url");
      alert("please enter url");
      return;
    }

    try {
      setResponse("loading....");
      const response = await axios({
        method,
        url,
        data: body ? JSON.parse(body) : undefined,
        headers: {
          "Content-Type": "application/json", // Adjust the content type if needed
          Authorization: "Bearer " + authorization,
        },
      });

      console.log(response.data);
      setResponse(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error(error);
      setResponse("Unable to fetch data. Error: " + error);
      console.error("hellew");
      // Handle the error as needed
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div style={{ margin: "3%" }}>
        <Card style={{ padding: 20, width: "100%", marginRight: "5%" }}>
          <div style={{ display: "flex" }}>
            <SplitBar method={method} setMethod={setMethod}></SplitBar>
            <TextField
              fullWidth
              id={"Url"}
              label="Url"
              variant="outlined"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              style={{
                marginBottom: 10,
                marginleft: "40px",
                // marginRight: "10px",
              }}
            />
            <Button
              style={{
                color: "white",
                backgroundColor: "#000000",
                marginTop: "5px",
                marginLeft: "10px",
                height: "100%",
              }}
              aria-controls="split-button-menu"
              aria-haspopup="true"
              size={"large"}
              onClick={handleClick}
            >
              Send
            </Button>
          </div>
          <TextField
            fullWidth
            id={"authorization"}
            label="authorization"
            variant="outlined"
            onChange={(e) => {
              setAuthorization(e.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            id={"Body"}
            label="Body"
            variant="outlined"
            onChange={(e) => {
              setBody(e.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <TextareaAutosize
            id="Body"
            aria-label="Body"
            placeholder="Response"
            value={respone}
            rows={4} // Set the number of rows
            style={{
              width: "100%",
              marginBottom: 10,
              resize: "none",
              minHeight: "100px",
              fontSize: "16px",
            }}
            readOnly
          />
        </Card>
      </div>
    </>
  );
}

export default App;
