import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8000";

export const useSocketIOClient = (cb) => {

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        return socket.on('tweet', data => {
            console.log('data', data)
            cb(data)
        });
    }, []);
}
