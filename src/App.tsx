import React, { useState } from "react";
import { PlusIcon } from "lucide-react";

interface Room {
  id: number;
  name: string;
  participants: number;
  thumbnailUrl: string;
}

const ChatRoomsPage: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: 1,
      name: "Movie Night",
      participants: 4,
      thumbnailUrl: "/api/placeholder/320/180",
    },
    {
      id: 2,
      name: "Casual Hangout",
      participants: 7,
      thumbnailUrl: "/api/placeholder/320/180",
    },
    {
      id: 3,
      name: "Study Group",
      participants: 12,
      thumbnailUrl: "/api/placeholder/320/180",
    },
    {
      id: 4,
      name: "Gaming Session",
      participants: 6,
      thumbnailUrl: "/api/placeholder/320/180",
    },
  ]);

  const handleCreateRoom = () => {
    const newRoom: Room = {
      id: rooms.length + 1,
      name: `New Chat Room ${rooms.length + 1}`,
      participants: 0,
      thumbnailUrl: "/api/placeholder/320/180",
    };
    setRooms([...rooms, newRoom]);
  };

  const handleJoinRoom = (roomId: number) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId
          ? { ...room, participants: room.participants + 1 }
          : room
      )
    );
  };

  return (
    <>
      <div className="h-screen bg-gray-200 py-4">
        <div className="bg-white/50 w-11/12 mx-auto  p-4 rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>
        <div className="flex">
          <div className="w-64  p-4 flex flex-col gap-4 mt-5 ">
            <button
              onClick={handleCreateRoom}
              className="w-full flex items-center justify-center bg-sky-500 text-white p-3 rounded-2xl hover:bg-blue-600 transition"
            >
              <PlusIcon className="mr-2 bg-sky-600 rounded-full" />
              Create Room
            </button>
            <button
              onClick={handleCreateRoom}
              className="w-full flex items-center justify-center bg-sky-500 text-white p-3 rounded-2xl hover:bg-blue-600 transition"
            >
              <PlusIcon className="mr-2 bg-sky-600 rounded-full " />
              Send Request
            </button>
            <button className="w-full flex gap-3 items-center   text-gray-500 p-3 rounded-2xl hover:bg-gray-300 hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                />
              </svg>
              {/* <PlusIcon className="mr-2 bg-gray-500 rounded-full " /> */}
              Playlists
            </button>
          </div>
          <div className="flex-1 p-6">
            <div className="flex-grow pr-4 rounded-lg bg-white p-2 w-2/3">
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome to Your Chat Room Platform
              </h1>
              <p className="text-gray-600">
                Join, create, and enjoy movies with friends.
              </p>
            </div>
            <div className="flex mb-6 gap-10">
              {/* <div className="w-1/3  flex py-4 items-center justify-center  rounded-lg bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m-17.25 0h7.5c.621 0 1.125-.504 1.125-1.125m0 0v-1.5c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                  />
                </svg>
              </div> */}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white"
                >
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                      <PlusIcon className="w-4 h-4" />
                    </div>
                    <img
                      src={room.thumbnailUrl}
                      alt={room.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-2">{room.name}</h2>
                  <p className="text-gray-600">
                    Participants: {room.participants}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoomsPage;
