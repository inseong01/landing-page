import { ReactNode } from "react";
import PhoneDevice from "../../device/phone";
import CommonSectionFrame from "../frame/section-frame";

type PhoneDeviceViewProps = {
  titleNode: ReactNode;
  descNode: ReactNode;
  isReverse?: boolean;
  caution?: string;
  src: string;
  alt: string;
};

export default function PhoneDeviceView({
  titleNode,
  descNode,
  isReverse = false,
  caution,
  src,
  alt,
}: PhoneDeviceViewProps) {
  return (
    <CommonSectionFrame>
      <div
        className={`flex w-[1000px] items-center justify-between ${isReverse ? "flex-row-reverse" : "flex-row"} gap-20 break-keep`}
      >
        <div className="w-full">
          <div className="mb-12">
            <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5]">
              {titleNode}
            </h2>
            <p className="text-base- w-70">{descNode}</p>
          </div>
          {caution && <p className="text-[#666]">{caution}</p>}
        </div>
        <div className="relative flex h-fit w-[60%] items-center justify-center">
          <PhoneDevice
            src={src}
            alt={alt}
            hoverEnable={false}
            width={"w-[300px]"}
            height={"h-[592px]"}
          />
        </div>
      </div>
    </CommonSectionFrame>
  );
}
