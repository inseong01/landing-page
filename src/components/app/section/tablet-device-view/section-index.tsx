import TabletDevice from "../../../project/device/tablet/tablet-index";
import CommonSectionFrame from "../frame/frame-index";
import DescriptionContext, { ContextProps } from "../context/context-index";

type TabletDeviceViewProps = {
  isReverse?: boolean;
  src: string;
  alt: string;
} & ContextProps;

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
            <DescriptionContext
              titleNode={titleNode}
              descNode={descNode}
              caution={caution}
            />
          </div>
        </div>
        <div className="relative flex h-auto w-full items-center justify-center">
          <TabletDevice src={src} alt={alt} />
        </div>
      </div>
    </CommonSectionFrame>
  );
}
