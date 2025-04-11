export default function Section_5() {
  return (
    <section className="flex h-svh w-full items-center justify-between bg-[#5A80A5] px-80 py-24 text-white">
      <div className="h-fit w-full">
        <div className="mb-10 text-5xl font-bold capitalize">
          <h2>other projects</h2>
        </div>
        <ul className="flex h-full w-full gap-10">
          <li className="flex h-90 max-w-60 flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-[#ACB4BA] p-6">
            <div className="capitalize">
              <span className="text-sm">1인 개발</span>
              <h3 className="text-3xl font-bold">project 1</h3>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-white p-3">
                <img
                  src="./src/assets/icon/filp-card.svg"
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
