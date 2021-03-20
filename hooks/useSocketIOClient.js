import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import _ from 'lodash';
const ENDPOINT = "http://localhost:8000";

export const useSocketIOClient = (cb) => {
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        return socket.on('tweet', data => {
            if (!_.isEmpty(data)) {
                cb(data)
            }
        });
    }, []);
}
