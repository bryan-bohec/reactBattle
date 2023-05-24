"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'

export default function Home() {
  return (
    <main className="container flex min-h-screen  items-center justify-between p-12 ">
      <div className="w-1/2">
        <div>
          <h3 className="text-xl pb-5">Choose a nickname</h3>
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Nickname"
            variant="standard"
            value="test"
            //onChange={null}
            className="pb-5"
          />
        </div>
        <div>
          <Button variant="contained" className="bg-header hover:bg-header">
            Create a room
          </Button>
        </div>
      </div>
      <div className="w-1/2 text-5xl font-bold">Battle your friends in a real time reaction-time test !</div>
    </main>
  );
}
