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
      <div className="mb-4 max-[576px]:mb-5 xl:mb-12">
        <h2 className="mb-5 block text-5xl leading-14 font-bold text-[#5A80A5] max-[576px]:text-4xl max-[576px]:leading-10">
          {titleNode}
        </h2>
        <p>{descNode}</p>
      </div>
      {caution && <p className="m-auto text-[#666]">{caution}</p>}
    </>
  );
}
