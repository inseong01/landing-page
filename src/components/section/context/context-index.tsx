import { ReactNode } from "react";

export type ContextProps = {
  titleNode: ReactNode;
  descNode: ReactNode;
  caution?: string;
};

export default function DescriptionContext({
  titleNode,
  descNode,
  caution,
}: ContextProps) {
  return (
    <>
      {/* 본문 */}
      <div className="mb-4 max-[576px]:mb-5 xl:mb-12">
        <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5] max-[576px]:text-4xl max-[576px]:leading-10">
          {titleNode}
        </h2>

        <p className="text-section-p">{descNode}</p>
      </div>

      {/* 첨부 */}
      {caution && <p className="text-section-c m-auto">{caution}</p>}
    </>
  );
}
