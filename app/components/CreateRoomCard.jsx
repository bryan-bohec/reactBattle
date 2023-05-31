import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { RoomContext, RoomProvider } from "../context/RoomContext";
import { useRouter } from "next/navigation";

export default function CreateRoomCard() {
  const [roomName, setRoomName] = useState("test");
  const router = useRouter();

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const { ws } = useContext(RoomContext);

  function createRoom() {
    ws.emit("create-room", roomName);
  }

  return (
    <>
      <div>
        <h3 className="text-xl pb-5">Choose a room name</h3>
      </div>
      <div>
        <TextField id="standard-basic" label="Room name" variant="standard" value={roomName} onChange={handleRoomNameChange} className="pb-5" />
      </div>
      <div>
        <Button variant="contained" className="bg-header hover:bg-header" onClick={createRoom}>
          Create a room
        </Button>
      </div>
    </>
  );
}
