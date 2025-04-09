import BannerBackground from "./app/banner/background/background-index";
import BannerHeader from "./app/banner/header/header-index";

export default function App() {
  return (
    <div className="h-screen w-full font-[Open_Sans]">
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
          <div className="h-110 w-143 bg-white shadow-[0_0px_35px_rgba(0,0,0,0.25)]">
            <img src="" alt="table img" />
            tablet img
          </div>
          <div className="absolute right-0 bottom-25 h-85 w-44 bg-amber-200 shadow-[0_0px_35px_rgba(0,0,0,0.25)]">
            <img src="" alt="app img" />
            phone img
          </div>
        </div>
      </section>
      {/* sec 3 */}
      <section className="flex h-svh w-full items-center justify-between bg-white px-80 py-20 text-[#5A80A5]">
        <div className="w-lg">
          <div className="mb-7 block w-lg text-5xl font-bold capitalize">
            title 1
          </div>
          <div className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            suscipit pariatur, qui soluta nulla recusandae voluptate fugit quos
            optio excepturi voluptatem eos, natus saepe reiciendis magni
            architecto eius facilis cum!
          </div>
        </div>
        <div>
          <div className="flex items-center gap-6">
            <div className="h-100 w-60 bg-amber-100">img 1</div>
            <div className="flex flex-col gap-6">
              <div className="h-100 w-60 bg-amber-100">img 2</div>
              <div className="h-100 w-60 bg-amber-100">img 3</div>
            </div>
          </div>
        </div>
      </section>
      {/* sec 4 */}
      <section className="flex h-svh w-full items-center justify-between bg-white px-80 py-20 text-[#5A80A5]">
        <div className="w-lg">
          <div className="mb-7 block w-lg text-5xl font-bold capitalize">
            title 2
          </div>
          <div className="mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            suscipit pariatur, qui soluta nulla recusandae voluptate fugit quos
            optio excepturi voluptatem eos, natus saepe reiciendis magni
            architecto eius facilis cum!
          </div>
          <nav>
            <ul className="flex w-fit items-center gap-2 overflow-hidden rounded-4xl border-1 p-1">
              <li className="rounded-2xl bg-[#5A80A5] px-10 leading-7 text-white">
                메뉴
              </li>
              <li className="block h-4 w-[1px] bg-[#5A80A5]"></li>
              <li className="rounded-2xl px-10 leading-7">좌석</li>
              <li className="block h-4 w-[1px] bg-[#5A80A5]"></li>
              <li className="rounded-2xl px-10 leading-7">주문</li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="flex items-center gap-6">
            <div className="h-100 w-140 bg-amber-100">img 1</div>
          </div>
        </div>
      </section>
    </div>
  );
}
