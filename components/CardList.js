import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Card } from "./Card";
import styled from "styled-components";
import { WidgetCard } from "./WidgetCard";

const ENDPOINT = "http://localhost:8000";

const TweetStream = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const CardList = () => {
  const [tweets, setTweets] = useState([]);
  console.log("tweets", tweets);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("tweet", (data) => {
      console.log("tweets in useEffect", tweets);
      console.log("data", data);
      setTweets((prevTweets) => [...prevTweets, data]);
    });
  }, []);

  return (
    <TweetStream>
      {tweets
        .map((tweet, i) => {
          console.log("tweet", tweet);
          return (
            <WidgetCard key={i} tweet={tweet} />
            // <Card key={i} tweet={tweet} />
          );
        })
        .reverse()}
    </TweetStream>
  );
};
