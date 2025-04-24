import PhoneDevice from "../../../project/device/phone/phone-index";
import CommonSectionFrame from "../frame/frame-index";
import DescriptionContext, { ContextProps } from "../context/context-index";

type PhoneDeviceViewProps = {
  isReverse?: boolean;
  src: string;
  alt: string;
} & ContextProps;

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
          <DescriptionContext
            titleNode={titleNode}
            descNode={descNode}
            caution={caution}
          />
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
