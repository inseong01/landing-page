export default function Section_6() {
  return (
    <section className="flex w-full items-center justify-between bg-[#5A80A5] px-80 py-24 text-white">
      <div className="mb-40 h-fit w-full">
        <div className="mb-10 text-5xl font-bold capitalize">
          <h2>contact</h2>
        </div>
        <ul className="flex w-full flex-col items-end gap-4">
          <li className="flex w-3/5 list-none items-center gap-4 text-xl">
            <span className="w-25">E-mail</span>
            <span className="h-6 w-[1px] bg-white"></span>
            <div className="box-border flex w-full items-center justify-between rounded-xl bg-[#868686] px-3 py-2">
              <p className="text-sm">description</p>
              <div className="box-content h-5 w-5 rounded-sm bg-[#D9D9D9] p-1">
                <img src="./src/assets/icon/copy.svg" alt="filp card icon" />
              </div>
            </div>
          </li>
          <li className="flex w-3/5 list-none items-center gap-4 text-xl">
            <span className="w-25">Blog</span>
            <span className="h-6 w-[1px] bg-white"></span>
            <div className="box-border flex w-full items-center justify-between rounded-xl bg-[#868686] px-3 py-2">
              <p className="text-sm">description</p>
              <div className="box-content h-5 w-5 rounded-sm bg-[#D9D9D9] p-1">
                <img
                  src="./src/assets/icon/move-window.svg"
                  alt="filp card icon"
                />
              </div>
            </div>
          </li>
          <li className="flex w-3/5 list-none items-center gap-4 text-xl">
            <span className="w-25">Github</span>
            <span className="h-6 w-[1px] bg-white"></span>
            <div className="box-border flex w-full items-center justify-between rounded-xl bg-[#868686] px-3 py-2">
              <p className="text-sm">description</p>
              <div className="box-content h-5 w-5 rounded-sm bg-[#D9D9D9] p-1">
                <img
                  src="./src/assets/icon/move-window.svg"
                  alt="filp card icon"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
