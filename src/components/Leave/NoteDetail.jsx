// import React from 'react'

import { Avatar } from "@nextui-org/react";

const NoteDetail = () => {

  const notes = [
    {
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmURjNWc5I_ZPQ5oeOt9_ORibdIrpdZf-lQ&usqp=CAU",
      name: "Adeoye John",
      time: "09:04 AM",
      date: "May 3rd, 2023",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit animi. Velit, id repellat? Quis, facere et sapiente officia eos ipsam iure. Quisquam reprehenderit repudiandae porro at aliquam eos natus.
    Reiciendis, laboriosam porro obcaecati excepturi itaque ipsam aspernatur nesciunt rem labore impedit? Commodi laudantium cum sapiente labore alias sequi at illum quibusdam repudiandae, voluptatibus quam repellat cumque nihil cupiditate necessitatibus`,
    },
    {
       profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wufnbZqmr8QYd5Q5UjFgDkmizutxojyTWg&usqp=CAU",
      name: "Olaitan Okunade",
      time: "08:13 PM",
      date: "February 2nd, 2023",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit animi. Velit, id repellat? Quis, facere et sapiente officia eos ipsam iure. Quisquam reprehenderit repudiandae porro at aliquam eos natus.
    Reiciendis`,
    },
    {
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUYWK2ER12rKqvZmJGKNgZRGPu_kTwXxHBg&usqp=CAU",
      name: "Stephen Alagbe",
      time: "06:04 PM",
      date: "January 10th, 2023",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit animi. Velit, id repellat? Quis, facere et sapiente officia eos ipsam iure. Quisquam reprehenderit repudiandae porro at aliquam eos natus.
    Reiciendis, laboriosam porro obcaecati excepturi itaque ipsam aspernatur nesciunt rem labore impedit? Commodi laudantium cum sapiente labore alias sequi at illum quibusdam repudiandae, voluptatibus quam repellat cumque nihil cupiditate necessitatibus`,
    },
    {
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVus6O1IqRwbOBSl91PWQ5biucI0mRvP0tit_2hoxeqVYrPZtgzN7X7uvrgeVT1TCJ81o&usqp=CAU",
      name: "Kayode Adeyinka",
      time: "01:21 AM",
      date: "October 20th, 2023",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sit animi. Velit, id repellat? Quis, facere et sapiente officia eos ipsam iure. Quisquam reprehenderit repudiandae porro at aliquam eos natus.
    Reiciendis, laboriosam porro obcaecati excepturi itaque ipsam aspernatur nesciunt rem labore impedit? Commodi laudantium cum sapiente labor`,
    },
  ];
  return (
    <div className="">
      {notes.map((note, i) => (
        <div
          key={i}
          className="p-6 pb-0 rounded border bg-white shadow mt-4 min-h-[10rem]"
        >
          <div className="flex gap-3 mb-2">
            <Avatar isBordered src={note.profile_image} />
            <div className="">
              <p className="text-lg font-medium">{note.name}</p>
              
              <span className=" text-sm text-gray-400">{note.date}</span>
            </div>
          </div>
          <p>{note.text}</p>
          <p className="my-2 text-end text-sm text-gray-400">{note.time}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteDetail;
