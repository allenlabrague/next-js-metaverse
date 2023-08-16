import { Image } from "@nextui-org/image";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";

const WorldCard = () => {
  return (
    <>
      <div className="absolute top-[50px] right-[20px] md:right-[100px] lg:right-[160px] w-[120px] md:w-[180px] md:h-[136px] p-[6px] bg-[#5d6680] rounded-3xl">
        <Image
          isBlurred
          src="/map-card-01.png"
          alt="people"
          className="rounded-3xl relative"
        />
        <div className="absolute bottom-10 md:bottom-14 left-5">
          <AvatarGroup>
            <Avatar size="sm" src="/people-01.png" alt="people" />
            <Avatar size="sm" src="/people-02.png" alt="people" />
            <Avatar size="sm" src="/people-03.png" alt="people" />
          </AvatarGroup>
        </div>
        <div className="font-normal text-xs md:text-xl text-white absolute bottom-5 left-5 z-10">
          <h3>Hawkins Labs</h3>
        </div>
      </div>
      <div className="absolute bottom-[260px] left-[20px] md:bottom-[150px] md:left-[170px] md:right-[100px] lg:right-[160px] w-[120px] md:w-[180px] md:h-[136px] p-[6px] bg-[#5d6680] rounded-3xl">
        <Image
          isBlurred
          src="/map-card-02.png"
          alt="people"
          className="w-full h-full rounded-3xl relative"
        />
        <div className="absolute bottom-10 md:bottom-14 left-5">
          <AvatarGroup>
            <Avatar size="sm" src="/people-01.png" alt="people" />
            <Avatar size="sm" src="/people-02.png" alt="people" />
            <Avatar size="sm" src="/people-03.png" alt="people" />
          </AvatarGroup>
        </div>
        <h3 className="font-normal text-xs md:text-xl text-white absolute bottom-5 left-5 z-10">
          The Upside Down
        </h3>
      </div>
    </>
  );
};

export default WorldCard;

{
  /* <div className="absolute bottom-[60px] left-[20px] w-[180px] h-[136px] p-[6px] bg-[#5d6680] rounded-3xl md:left-[80px] lg:left-[160px] md:bottom-[150px]">
<Image
  isBlurred
  src="/map-card-02.png"
  alt="people"
  className="w-full h-full rounded-3xl relative"
/>
<div className="flex items-center gap-8 absolute bottom-14 left-5 ">
  <div className="w-[24px] h-[24px] flex items-center">
    <AvatarGroup>
      <Avatar size="sm" src="/people-01.png" alt="people" />
      <Avatar size="sm" src="/people-02.png" alt="people" />
      <Avatar size="sm" src="/people-03.png" alt="people" />
    </AvatarGroup>
  </div>
</div>
<h3 className="font-normal text-lg text-white absolute bottom-5 left-5 z-10">
  The Upside Down
</h3>
</div> */
}
