import { ReactNode } from "react";
import TabletDevice from "../../device/tablet";

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
    <section className="flex h-svh w-full cursor-default items-center justify-center bg-[#F5F5F5] py-24">
      <div
        className={`flex w-[1000px] items-center justify-between ${isReverse ? "flex-row-reverse" : "flex-row"} gap-20 break-keep`}
      >
        <div className="w-full">
          <div className="mb-12">
            <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5]">
              {titleNode}
            </h2>
            <p className="text-base- w-60">{descNode}</p>
          </div>
          {caution && <p className="text-[#666]">{caution}</p>}
        </div>
        <div className="relative flex h-fit w-full items-center justify-center">
          <TabletDevice src={src} alt={alt} />
        </div>
      </div>
    </section>
  );
}
