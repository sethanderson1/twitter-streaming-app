import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Card } from "./Card";
import styled from "styled-components";
import { WidgetCard } from "./WidgetCard";
import axios from "axios";

const ENDPOINT = "http://localhost:8000";

export const CardList = () => {
  const [tweets, setTweets] = useState([]);
  const [socketOn, setSocketOn] = useState(false);
  console.log("socketOn", socketOn);
  console.log("tweets", tweets);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("tweet", (data) => {
      setTweets((prevTweets) => [...prevTweets, data]);
    });
  }, []);

  const handleSocketClick = async () => {
    // turn socket off on server
    console.log("clicked socket on or off")
    const url = `http://localhost:8000/socketOn`;
    try {
      const res = await axios.post(url, {
        socketOn: !socketOn,
      });
      console.log("res", res);

      setSocketOn((prev) => !prev);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleSocketClick}>{socketOn ? "On" : "Off"}</button>
      </div>
      {tweets
        .map((tweet, i) => {
          console.log("tweet", tweet);
          return (
            <WidgetCard key={i} tweet={tweet} />
            // <Card key={i} tweet={tweet} />
          );
        })
        .reverse()}
    </div>
  );
};
