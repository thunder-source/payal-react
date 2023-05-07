import React from "react";

export default function SectionThree() {
  const data = [
    {
      heading: "LATEST NEWS AND UPDATES",
      list: [
        {
          name: "NATA Exam Online Registration 2023",
          link: "",
        },
        {
          name: "UCEED Result Sharing Institutes",
          link: "",
        },
        {
          name: "NID Selection of Test Centres for B.Des DAT Mains",
          link: "",
        },
        {
          name: "NID Weightage for the Final Results",
          link: "",
        },
      ],
    },
    {
      heading: "ANNOUNCEMENTS",
      list: [
        {
          name: "Registration for NID | NIFT | NATA | UCEED | CEED Free Mock Test 2023-24",
          link: "",
        },
        {
          name: "NIFT Registration for Free Mock Tests 2023-24",
          link: "",
        },
        {
          name: "NID Registration for Free Mock Tests 2023-24",
          link: "",
        },
        {
          name: "UCEED Registration for Free Mock Tests 2023-24",
          link: "",
        },
        {
          name: "NIFT Registration for Free Mock Tests 2023-24",
          link: "",
        },
      ],
    },
  ];
  return (
    <div className="container mx-auto my-16  flex gap-10 justify-center">
      {data.map((data) => {
        return (
          <div className="w-full max-w-[700px] p-4 px-8 ">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              {data.heading}
            </h2>
            {data.list.map((list) => {
              return (
                <div className="flex mt-4 justify-between items-start">
                  <p className="text-lg text-left  mr-3">{list.name}</p>
                  <button className="bg-orange-500 text-white min-w-[8rem] py-0.5 rounded-md text-lg hover:text-black">
                    Click Here
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
