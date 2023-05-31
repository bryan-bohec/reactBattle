import React, { createContext, useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { useRouter } from "next/navigation";

const WS = "http://localhost:8080";


export const RoomContext = createContext(null);
const ws = socketIOClient(WS);

export const RoomProvider = ({ children}) => {
    const [currentRoom, setCurrentRoom] = useState({
        roomId : "",
        roomName : ""
    })

    const router = useRouter();


  const enterRoom = (room) => {
    console.log(room);
    router.push(`/room/${room.roomId}`);
    setCurrentRoom(room);
  };

  const enterRoomOther = (room) => {
    setCurrentRoom(room);
  }

  const updateRoom = (room) => {
    setCurrentRoom(room);
  }


  //on "fais les ws.on dans le useEffect"
  useEffect(() => {
    ws.on("room-created", enterRoom);
    ws.on("room-joined", enterRoomOther);
    ws.on("room-updated", updateRoom);
  }, []);


  return <RoomContext.Provider value={{ ws, currentRoom, setCurrentRoom }}>{children}</RoomContext.Provider>;
};
