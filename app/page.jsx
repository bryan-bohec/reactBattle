"use client";
import Image from "next/image";
import { useState } from 'react';
import CreateRoomCard from "./components/CreateRoomCard";
export default function Home() {



  return (
    <main className="container flex min-h-screen  items-center justify-between p-12 ">
      <div className="w-1/2">
        <CreateRoomCard />
      </div>
      <div className="w-1/2 text-5xl font-bold">Battle your friends in a real time reaction-time test !</div>
    </main>
  );
}
