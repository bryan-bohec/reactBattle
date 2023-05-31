"use client";
import NickNamePicker from "@/app/components/NickNamePicker";
import { RoomContext } from "@/app/context/RoomContext";
import { useEffect, useState } from "react";
import { useContext } from "react";

export default function Room({ params }) {
  const roomId = params.slug;
  const { ws } = useContext(RoomContext);
  const { currentRoom, setCurrentRoom } = useContext(RoomContext);
  const [showNickNamePicker, setShowNickNamePicker ] = useState(true);

  function joinRoom(player) {
    const updatedRoom = currentRoom;
    updatedRoom.players.push(player);
    ws.emit("update-room", updatedRoom);
    setShowNickNamePicker(false);
  }

  useEffect(() => {
    ws.emit("join-room", roomId);
    console.log(roomId);
    console.log(currentRoom);
    
  }, []);
  return (
    <>
      <div>
        <h1 className="h-14">{currentRoom.roomName}'s room</h1>
        {showNickNamePicker ? <NickNamePicker joinRoom={joinRoom} /> : null}
        <div>
            {currentRoom.players ? currentRoom.players.map(p => p.name) : null}
        </div>
      </div>
    </>
  );
}
