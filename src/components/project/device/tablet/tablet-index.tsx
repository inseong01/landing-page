export default function TabletDevice({
  src,
  alt,
  width = "max-w-[542px]",
  height = "max-h-[415px]",
}: {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}) {
  return (
    <div
      className={`flex ${height} ${width} items-center justify-center max-[576px]:max-h-[230px] max-[576px]:max-w-[300px] max-lg:h-[345px] max-lg:w-[450px] max-sm:h-[215px] max-sm:w-[280px]`}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)] max-sm:rounded-[16px]"
      />
    </div>
  );
}
