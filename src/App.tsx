import BannerBackground from "./app/banner/background/background-index";
import BannerHeader from "./app/banner/header/header-index";

export default function App() {
  return (
    <div className="h-screen w-full bg-[#5A80A5] font-[Open_Sans]">
      <meta name="author" content="Inseong Yu" />
      <meta name="keyword" content="React, Threejs" />
      <meta name="description" content="This is React metadata" />

      <BannerHeader />
      <BannerBackground />
      {/* sec 1 */}
      <section className="m-auto h-72 w-full bg-white px-40 py-24 text-[#5A80A5]">
        <div className="text-center tracking-widest">
          <div className="mb-1 text-xl">프로젝트 둘러보기</div>
          <div className="text-4xl font-bold uppercase">
            inseong github project
          </div>
        </div>
      </section>
      {/* sec 2 */}
      <section className="flex h-svh w-full items-center justify-between bg-[#5A80A5] px-80 py-24 text-white">
        <div className="w-lg tracking-widest">
          <div className="mb-12">
            <span>description</span>
            <h2 className="block text-5xl font-bold">Project Title</h2>
          </div>
          <p>0000.00.~0000.00. | contributor</p>
        </div>
        <div className="relative flex h-full w-full items-center justify-center text-black">
          <div className="flex h-110 w-143">
            <img
              src="./src/assets/devices/tablet.png"
              alt="tablet img"
              className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
            />
          </div>
          <div className="absolute right-0 bottom-20 flex h-85 w-44">
            <img
              src="./src/assets/devices/phone.png"
              alt="phone img"
              className="rounded-[12px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section>
      {/* sec 3 */}
      <section className="bg-[#5A80A5]">
        <div className="flex h-fit w-full items-center justify-between overflow-hidden rounded-t-[50px] bg-white px-80 py-20 text-[#5A80A5] shadow-[0_-30px_35px_rgba(0,0,0,0.25)]">
          <div className="w-lg">
            <h2 className="mb-7 block w-lg text-5xl font-bold capitalize">
              title 1
            </h2>
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              suscipit pariatur, qui soluta nulla recusandae voluptate fugit
              quos optio excepturi voluptatem eos, natus saepe reiciendis magni
              architecto eius facilis cum!
            </div>
          </div>
          <div className="h-full w-full">
            <div className="flex items-center justify-end gap-1">
              <div className="flex h-100 w-60 justify-center">
                <img
                  src="./src/assets/devices/phone.png"
                  alt="phone 1"
                  className="rounded-[12px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div>
                  <div className="flex h-100 w-60 justify-center">
                    <img
                      src="./src/assets/devices/phone.png"
                      alt="phone 2"
                      className="rounded-[12px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex h-100 w-60 justify-center">
                    <img
                      src="./src/assets/devices/phone.png"
                      alt="phone 3"
                      className="rounded-[12px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sec 4 */}
      <section className="bg-[#5A80A5] pb-20">
        <div className="flex h-fit w-full items-center justify-between overflow-hidden rounded-b-[50px] bg-white px-80 py-20 text-[#5A80A5] shadow-[0_40px_35px_rgba(0,0,0,0.25)]">
          <div className="w-lg">
            <h2 className="mb-7 block w-lg text-5xl font-bold capitalize">
              title 2
            </h2>
            <div className="mb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              suscipit pariatur, qui soluta nulla recusandae voluptate fugit
              quos optio excepturi voluptatem eos, natus saepe reiciendis magni
              architecto eius facilis cum!
            </div>
            <nav>
              <ul className="flex w-fit items-center gap-2 overflow-hidden rounded-4xl border-1 p-1 text-sm">
                <li className="flex items-center justify-center rounded-2xl bg-[#5A80A5] px-12 leading-7 text-white">
                  <span>메뉴</span>
                </li>
                <li className="block h-4 w-[1px] bg-[#5A80A5]"></li>
                <li className="flex items-center justify-center rounded-2xl px-12 leading-7">
                  <span>좌석</span>
                </li>
                <li className="block h-4 w-[1px] bg-[#5A80A5]"></li>
                <li className="flex items-center justify-center rounded-2xl px-12 leading-7">
                  <span>주문</span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex h-120 w-143 items-center justify-end gap-6">
            <div className="flex h-87 w-120">
              <img
                src="./src/assets/devices/tablet.png"
                alt="tablet img"
                className="rounded-[26px] shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* sec 5 */}
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
      {/* sec 6 */}
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
      {/* footer */}
      <footer className="flex h-25 w-full items-center justify-center bg-[#3A3A3A]">
        <div className="">
          <div className="text-2xl font-bold text-white capitalize">logo</div>
        </div>
      </footer>
    </div>
  );
}
