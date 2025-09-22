/* eslint-disable @next/next/no-img-element */
export default function ProductLogo({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="flex h-[106px] w-[396px] max-[576px]:h-[70px] max-[576px]:w-[260px]">
      <img src={src} alt={alt} />
    </div>
  );
}