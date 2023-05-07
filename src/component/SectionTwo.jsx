import React from "react";

export default function SectionTwo() {
  const data1 = [
    {
      src: "./class-online.png",
      name: "Classroom Coaching Program",
    },
    {
      src: "./class-room.png",
      name: "Online Interactive Class",
    },
    {
      src: "./interview.png",
      name: "Top Design Colleges Application",
    },
    {
      src: "./study-matirial.png",
      name: "Study Material 2022-23",
    },
    {
      src: "./online-test.png",
      name: "Online Test Series",
    },
  ];
  const data2 = [
    {
      src: "./class-online.png",
      name: "Classroom Coaching Program",
    },
    {
      src: "./class-room.png",
      name: "Online Interactive Class",
    },
    {
      src: "./interview.png",
      name: "Top Design Colleges Application",
    },
    {
      src: "./study-matirial.png",
      name: "Study Material 2022-23",
    },
  ];

  return (
    <div className="p-4 py-10 flex flex-col gap-4 pt-14 ">
      <div className="flex gap-3 justify-center items-center px-12 flex-wrap">
        {data1.map((data) => {
          return (
            <div className="w-full min-w-[200px] max-w-[300px] h-[140px] bg-white  rounded-md shadow-2xl flex flex-col justify-between items-center p-4">
              <img
                src={data.src}
                className="h-[70px] w-[70px] object-contain"
                alt=""
              />
              <div className="font-semibold">{data.name}</div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 justify-center items-center px-12 flex-wrap">
        {data2.map((data) => {
          return (
            <div className="w-full min-w-[200px] max-w-[300px] h-[140px] bg-white  rounded-md shadow-2xl flex flex-col justify-between items-center p-4">
              <img
                src={data.src}
                className="h-[70px] w-[70px] object-contain"
                alt=""
              />
              <div className="font-semibold">{data.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
