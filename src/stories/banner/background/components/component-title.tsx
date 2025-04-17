export default function TitleComp() {
  return (
    <div className="absolute top-0 left-0 z-9 flex h-full w-full items-center justify-between px-12 font-bold text-white">
      <div className="left">
        <h1 className="text-8xl">Today is</h1>
        <h2 className="mb-14 text-8xl capitalize">wednesday.</h2>
        <p className="font-normal tracking-widest">Designed by Inseong</p>
      </div>
      <div className="right">
        <span></span>
      </div>
    </div>
  );
}
