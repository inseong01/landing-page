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
        className={`flex w-full items-center justify-between max-xl:flex-col xl:h-full xl:w-[1000px] ${isReverse ? "flex-row-reverse" : "flex-row"} gap-20`}
      >
        <div className="w-full break-keep max-[576px]:px-4 max-[576px]:text-sm">
          <div className="mb-0 max-[576px]:mb-6 xl:mb-12">
            <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5] max-[576px]:text-4xl max-[576px]:leading-10">
              {titleNode}
            </h2>
            <p className="w-auto xl:w-70">{descNode}</p>
          </div>
          {caution && <p className="m-auto text-[#666]">{caution}</p>}
        </div>
        <div className="relative flex w-[50%] items-center justify-center max-[576px]:w-auto">
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
