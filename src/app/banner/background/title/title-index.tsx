export default function BannerTitle() {
  return (
    <div className="absolute top-0 left-0 z-9 flex h-dvh w-full items-center justify-between px-24 font-bold text-white">
      <div className="left">
        <h1 className="text-9xl">Today is</h1>
        <h2 className="mb-20 text-9xl capitalize">wednesday.</h2>
        <p className="font-normal tracking-widest">Designed by Inseong</p>
      </div>
      <div className="right">
        <span></span>
      </div>
    </div>
  );
}
