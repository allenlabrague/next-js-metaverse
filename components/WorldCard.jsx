import React from "react";

const WorldCard = () => {
  return (
    <>
      <div className="absolute top-[50px] right-[20px] md:right-[100px] lg:right-[160px] w-[180px] h-[136px] p-[6px] bg-[#5d6680] rounded-3xl">
        <img
          src="/map-card-01.png"
          alt="people"
          className="w-full h-full rounded-3xl relative"
        />
        <div className="flex items-center gap-8 absolute bottom-14 left-5 ">
          <div className="w-[24px] h-[24px] flex items-center">
            <img
              src="/people-01.png"
              alt="people"
              className="w-full h-full z-10"
            />
            <img
              src="/people-02.png"
              alt="people"
              className="w-full h-full relative -left-3 z-10"
            />
            <img
              src="/people-03.png"
              alt="people"
              className="w-full h-full relative -left-5"
            />
          </div>
          <div>
            <h3 className="text-white font-normal text-[12px]">
              + 264 has joined
            </h3>
          </div>
        </div>
        <h3 className="font-normal text-xl text-white absolute bottom-5 left-5">
          Hawkins Labs
        </h3>
      </div>
      <div className="absolute bottom-[60px] left-[20px] w-[180px] h-[136px] p-[6px] bg-[#5d6680] rounded-3xl md:left-[80px] lg:left-[160px] md:bottom-[150px]">
        <img
          src="/map-card-02.png"
          alt="people"
          className="w-full h-full rounded-3xl relative"
        />
        <div className="flex items-center gap-8 absolute bottom-14 left-5 ">
          <div className="w-[24px] h-[24px] flex items-center">
            <img
              src="/people-01.png"
              alt="people"
              className="w-full h-full z-10"
            />
            <img
              src="/people-02.png"
              alt="people"
              className="w-full h-full relative -left-3 z-10"
            />
            <img
              src="/people-03.png"
              alt="people"
              className="w-full h-full relative -left-5"
            />
          </div>
          <div>
            <h3 className="text-white font-normal text-[12px]">
              + 264 has joined
            </h3>
          </div>
        </div>
        <h3 className="font-normal text-lg text-white absolute bottom-5 left-5">
          The Upside Down
        </h3>
      </div>
    </>
  );
};

export default WorldCard;
