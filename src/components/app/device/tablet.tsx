export default function TabletDevice({
  src,
  alt,
  width = "w-[542px]",
  height = "h-[415px]",
}: {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}) {
  return (
    <div className={`flex ${height} ${width} items-center justify-center`}>
      <img
        src={src}
        alt={alt}
        className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}
