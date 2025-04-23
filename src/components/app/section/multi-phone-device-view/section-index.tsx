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
    <section className="flex h-auto w-full cursor-default items-center justify-center bg-[#F5F5F5] py-24 max-xl:text-center lg:px-8">
      <div
        className={`flex w-[1000px] items-center justify-between gap-12 max-xl:w-full max-xl:flex-col ${isReverse ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="w-full break-words break-keep max-[576px]:mb-6 max-[576px]:px-4 max-[576px]:text-sm">
          <div className="mb-4 max-[576px]:mb-5 xl:mb-12">
            <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5] max-[576px]:text-4xl max-[576px]:leading-10">
              {titleNode}
            </h2>
            <p>{descNode}</p>
          </div>
          {caution && <p className="m-auto text-[#666]">{caution}</p>}
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
    <div className="h-full w-full max-[576px]:h-auto">
      <div className="flex h-auto items-center justify-end gap-5 max-xl:flex-row max-xl:justify-center max-lg:flex-col xl:gap-15">
        <PhoneDevice src={src_1} alt={alt_1} hoverEnable={true} />
        <div className="flex h-auto flex-row gap-5 max-[576px]:flex-col xl:flex-col xl:gap-15">
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
