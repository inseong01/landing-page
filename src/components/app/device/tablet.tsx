export default function TabletDevice({
  src = "./src/assets/devices/tablet.png",
  alt = "tablet image",
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <div className="flex h-[422px] w-[550px]">
      <img
        src={src}
        alt={alt}
        className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}
