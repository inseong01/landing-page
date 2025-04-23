import { ReactNode } from "react";
import TabletDevice from "../../device/tablet";
import CommonSectionFrame from "../frame/section-frame";

type TabletDeviceViewProps = {
  titleNode: ReactNode;
  descNode: ReactNode;
  isReverse?: boolean;
  caution?: string;
  src: string;
  alt: string;
};

export default function TabletDeviceView({
  titleNode,
  descNode,
  isReverse = false,
  caution,
  src,
  alt,
}: TabletDeviceViewProps) {
  return (
    <CommonSectionFrame>
      <div
        className={`flex h-full w-[1000px] items-center justify-between max-xl:h-auto max-xl:w-full max-xl:flex-col ${isReverse ? "flex-row-reverse" : "flex-row"} gap-12 break-keep`}
      >
        <div className="w-full max-[576px]:text-sm">
          <div className="mb-12 max-xl:mb-4">
            <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5] max-[576px]:text-4xl max-[576px]:leading-10">
              {titleNode}
            </h2>
            <p className="w-55 max-xl:m-auto">{descNode}</p>
          </div>
          {caution && <p className="text-[#666]">{caution}</p>}
        </div>
        <div className="relative flex h-auto w-full items-center justify-center">
          <TabletDevice
            src={src}
            alt={alt}
            width="w-[542px]"
            height="h-[415px]"
          />
        </div>
      </div>
    </CommonSectionFrame>
  );
}
