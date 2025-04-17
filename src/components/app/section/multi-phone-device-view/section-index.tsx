import { ReactNode } from "react";
import PhoneDevice from "../../device/phone";

type MultiPhoneDevicesViewProps = {
  titleNode: ReactNode;
  descNode: ReactNode;
  isReverse?: boolean;
  caution?: string;
  src_1: string;
  src_2: string;
  src_3: string;
  alt_1: string;
  alt_2: string;
  alt_3: string;
};

export default function MultiPhoneDevicesView({
  titleNode,
  descNode,
  isReverse = false,
  caution,
  src_1,
  src_2,
  src_3,
  alt_1,
  alt_2,
  alt_3,
}: MultiPhoneDevicesViewProps) {
  const phoneDeviceProps = { src_1, src_2, src_3, alt_1, alt_2, alt_3 };
  return (
    <section className="flex h-fit w-full cursor-default items-center justify-center bg-[#F5F5F5] py-24">
      <div
        className={`flex w-[1000px] items-center justify-between gap-25 ${isReverse ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="w-full">
          <div className="mb-12">
            <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5]">
              {titleNode}
            </h2>
            <p>{descNode}</p>
          </div>
          {caution && <p className="text-[#666]">{caution}</p>}
        </div>
        <div className="relative flex h-fit w-full items-center justify-center">
          <MobileDeviceBox {...phoneDeviceProps} />
        </div>
      </div>
    </section>
  );
}

function MobileDeviceBox({
  src_1,
  src_2,
  src_3,
  alt_1,
  alt_2,
  alt_3,
}: {
  src_1: string;
  src_2: string;
  src_3: string;
  alt_1: string;
  alt_2: string;
  alt_3: string;
}) {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-end gap-10">
        <PhoneDevice src={src_1} alt={alt_1} hoverEnable={true} />
        <div className="flex flex-col gap-10">
          <div>
            <PhoneDevice src={src_2} alt={alt_2} hoverEnable={true} />
          </div>
          <div>
            <PhoneDevice src={src_3} alt={alt_3} hoverEnable={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
