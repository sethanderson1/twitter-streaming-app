import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Tweet } from "react-twitter-widgets";

export const WidgetCard = React.memo(({ tweet }) => {
  console.log("tweet", tweet);

  return <Tweet tweetId={tweet.tweetId} />;
});
