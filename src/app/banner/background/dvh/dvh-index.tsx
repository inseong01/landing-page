import { useAtom } from "jotai";

import { getDay } from "../../../../utils/functions/day/get-day";
import { loginStateAtom, modalStateAtom } from "../../../../utils/atom/atom";

import DownMotionNav from "./dvh-nav";

export default function BannerDvhSize() {
  const dayIdx = new Date().getDay();
  const today = getDay(dayIdx);

  const [isLogin] = useAtom(loginStateAtom);
  const loginTitle = isLogin ? "로그아웃" : "로그인";

  const [, setLoginModalOpen] = useAtom(modalStateAtom);

  function onClickLoginBtn() {
    setLoginModalOpen(true);
  }

  return (
    <div className="animate-fadeIn absolute top-0 left-0 z-9 flex h-dvh w-full items-center justify-between p-4 font-bold text-white lg:px-10">
      {/* 좌측 */}
      <div className="left">
        <h1 className="mb-2 text-5xl max-[576px]:text-3xl lg:text-7xl">
          Today is
        </h1>

        <h2 className="mb-10 text-7xl capitalize max-[576px]:text-5xl lg:text-9xl xl:mb-20">
          {today}.
        </h2>

        <p className="text-lg font-normal tracking-widest max-[576px]:text-sm">
          새로 출시된 서비스를 확인해보세요.
        </p>
      </div>

      {/* 우측 */}
      <div className="right flex h-full justify-start">
        {/* 로그인 상태 아이콘 */}
        <button
          className="box-content h-[25px] w-[25px] cursor-pointer p-1"
          title={loginTitle}
          onClick={onClickLoginBtn}
        >
          {isLogin ? <ICON_LOGOUT /> : <ICON_LOGIN />}
        </button>
      </div>
      <DownMotionNav />
    </div>
  );
}

function ICON_LOGIN() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="25px"
      height="25px"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#fff"
        stroke="none"
      >
        <path d="M2175 5108 c-27 -5 -87 -27 -133 -48 -108 -51 -222 -161 -270 -260 -55 -113 -62 -160 -62 -411 0 -218 1 -227 23 -260 32 -49 105 -83 158 -74 53 9 115 64 129 113 5 21 10 125 10 232 0 184 2 198 24 246 13 27 42 66 66 87 81 69 55 67 834 66 l701 -1 -217 -73 c-280 -94 -342 -137 -412 -284 l-31 -66 -3 -1707 -2 -1708 -368 0 c-412 0 -426 2 -502 67 -24 21 -53 60 -66 87 -22 48 -24 62 -24 246 0 107 -5 211 -10 232 -14 49 -76 104 -129 113 -53 9 -126 -25 -158 -74 -22 -33 -23 -42 -23 -260 0 -251 7 -298 62 -411 48 -99 162 -209 269 -259 46 -22 111 -44 143 -50 36 -7 208 -11 433 -11 l373 0 0 -143 c0 -98 5 -159 15 -193 23 -79 86 -168 155 -218 83 -61 145 -81 255 -81 l90 0 670 224 c369 123 692 235 719 248 58 29 132 101 169 163 60 104 57 -22 57 2135 0 2139 3 2017 -55 2124 -33 60 -114 140 -173 170 -103 53 -59 51 -1412 50 -747 -1 -1275 -5 -1305 -11z m2594 -342 l26 -26 3 -1953 c3 -1809 2 -1954 -14 -1984 -9 -18 -31 -38 -48 -46 -17 -8 -319 -110 -671 -227 -694 -231 -671 -226 -726 -170 l-29 28 0 1961 0 1960 23 26 c18 21 142 65 677 245 710 238 707 237 759 186z" />
        <path d="M1330 3829 c-83 -33 -126 -142 -86 -217 8 -15 137 -148 285 -297 l271 -270 -849 -5 c-838 -5 -850 -5 -877 -26 -53 -39 -69 -71 -69 -134 0 -63 16 -95 69 -134 27 -21 39 -21 877 -26 l849 -5 -271 -270 c-148 -148 -277 -282 -285 -297 -8 -15 -14 -47 -14 -71 0 -113 126 -190 226 -139 23 12 214 196 456 439 358 359 418 424 429 461 26 89 30 84 -429 545 -230 230 -434 427 -454 438 -40 21 -88 24 -128 8z" />
      </g>
    </svg>
  );
}
function ICON_LOGOUT() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="25px"
      height="25px"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#fff"
        stroke="none"
      >
        <path d="M2175 5108 c-27 -5 -87 -27 -133 -48 -108 -51 -222 -161 -270 -260 -55 -113 -62 -160 -62 -411 0 -218 1 -227 23 -260 32 -49 105 -83 158 -74 53 9 115 64 129 113 5 21 10 125 10 232 0 184 2 198 24 246 13 27 42 66 66 87 81 69 55 67 834 66 l701 -1 -217 -73 c-280 -94 -342 -137 -412 -284 l-31 -66 -3 -1707 -2 -1708 -368 0 c-412 0 -426 2 -502 67 -24 21 -53 60 -66 87 -22 48 -24 62 -24 246 0 107 -5 211 -10 232 -14 49 -76 104 -129 113 -53 9 -126 -25 -158 -74 -22 -33 -23 -42 -23 -260 0 -251 7 -298 62 -411 48 -99 162 -209 269 -259 46 -22 111 -44 143 -50 36 -7 208 -11 433 -11 l373 0 0 -143 c0 -98 5 -159 15 -193 23 -79 86 -168 155 -218 83 -61 145 -81 255 -81 l90 0 670 224 c369 123 692 235 719 248 58 29 132 101 169 163 60 104 57 -22 57 2135 0 2139 3 2017 -55 2124 -33 60 -114 140 -173 170 -103 53 -59 51 -1412 50 -747 -1 -1275 -5 -1305 -11z m2594 -342 l26 -26 3 -1953 c3 -1809 2 -1954 -14 -1984 -9 -18 -31 -38 -48 -46 -17 -8 -319 -110 -671 -227 -694 -231 -671 -226 -726 -170 l-29 28 0 1961 0 1960 23 26 c18 21 142 65 677 245 710 238 707 237 759 186z" />
        <path d="M890 3821 c-19 -11 -222 -208 -452 -438 -358 -359 -418 -424 -429 -460 -26 -90 -30 -85 429 -546 242 -243 433 -427 456 -439 100 -51 226 26 226 139 0 24 -6 56 -14 71 -8 15 -137 149 -285 297 l-271 270 849 5 c838 5 850 5 877 26 53 39 69 71 69 134 0 63 -16 95 -69 134 -27 21 -39 21 -877 26 l-849 5 271 270 c148 149 277 282 285 297 34 64 9 152 -58 201 -38 28 -114 32 -158 8z" />
      </g>
    </svg>
  );
}
