import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";

export default function NickNamePicker({joinRoom}) {
  const  [player, setPlayer] = useState({
    name: "",
    scores: [],
  });

  const handlePlayerChange = (event) => {
    let newName = event.target.value
    setPlayer({...player, name: newName});
  };


  return (
    <>
      <div>
        <h3 className="text-xl pb-5">Choose a name</h3>
      </div>
      <div>
        <TextField id="standard-basic" label="Name" variant="standard" value={player.name} onChange={handlePlayerChange} className="pb-5" />
      </div>
      <div>
        <Button variant="contained" className="bg-header hover:bg-header" onClick={() => joinRoom(player)}>
          Join room
        </Button>
      </div>
    </>
  );
}
