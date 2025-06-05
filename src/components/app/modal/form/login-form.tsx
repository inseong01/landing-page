import {
  ChangeEvent,
  MouseEvent,
  useActionState,
  useEffect,
  useState,
} from "react";
import { useAtom } from "jotai";
import { AuthTokenResponsePassword } from "@supabase/supabase-js";

import { loginStateAtom, modalStateAtom } from "../../../../utils/atom/atom";
import { loginAction } from "./actions";

const initState = {} as AuthTokenResponsePassword;
const initInputValueState: { [key: string]: string } = {
  email: "",
  password: "",
};
const initInputErrorState: {
  [key: string]: { isError: boolean; msg: string };
} = {
  email: { isError: false, msg: "" },
  password: { isError: false, msg: "" },
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initState);
  const { data, error } = state;

  const [, setModalOpen] = useAtom(modalStateAtom);
  const [, setLoginState] = useAtom(loginStateAtom);

  /* 모달 닫기 */
  function onClickCloseModal() {
    setModalOpen(false);
  }

  const [inputText, setInputText] = useState(initInputValueState);
  const [inputError, setInputError] = useState(initInputErrorState);

  /* 입력 함수 */
  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setInputText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setInputError((prev) => {
      return {
        ...prev,
        [name]: {
          isError: false,
          msg: "",
        },
      };
    });
  }

  /* 제출 버튼 */
  function onClickSubmitButton(e: MouseEvent<HTMLButtonElement>) {
    // 빈 형식 검증
    const isInputEmpty = Object.entries(inputText).some(
      ([, value]) => value.length === 0,
    );
    if (isInputEmpty) {
      e.preventDefault();

      const errorState = Object.keys(inputText).reduce(
        (acc, key) => {
          const isError = !inputText[key]?.length;

          acc[key] = {
            isError,
            msg: isError ? `빈 칸을 입력해주세요` : "",
          };
          return acc;
        },
        {} as Record<string, { isError: boolean; msg: string }>,
      );

      setInputError(errorState);

      return;
    }

    // 이메일 형식 검증
    const isValideEmail = inputText["email"].match(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    );
    if (!isValideEmail) {
      e.preventDefault();

      setInputError((prev) => {
        return {
          ...prev,
          email: {
            isError: true,
            msg: "올바른 이메일 형식이 아닙니다.",
          },
        };
      });

      return;
    }
  }

  useEffect(() => {
    const isServerError = error?.status?.toString().startsWith("4");
    if (isServerError) {
      alert("사용자 정보를 찾을 수 없습니다.");

      setInputText(initInputValueState);
      setInputError(initInputErrorState);

      return;
    }
  }, [error]);

  /* 
    - useEffect 의존성 문제
    - 토큰 획득 후 로그인 처리 확인
    - 새로고침마다 로그인 여부 확인
  */
  useEffect(() => {
    if (!data?.session) return;

    /* 토큰 여부 검증 */
    const hasAccessToken = data.session.access_token;
    if (!hasAccessToken) {
      alert("유효하지 않은 토큰입니다.");

      setLoginState(false);
      return;
    }

    /* 토큰 만료 시간 검증 */
    const now = Math.floor(Date.now() / 1000); // 초 변환
    const created_at = Math.floor(
      new Date(data.user.last_sign_in_at!).getTime() / 1000,
    ); // 초 변환
    const expires_in = data.session.expires_in; // 초

    const timeElapsed = now - created_at;
    const isExpired = expires_in <= timeElapsed;
    console.log(expires_in, now, created_at, timeElapsed, isExpired);
    if (isExpired) {
      alert("유효하지 않은 접근입니다.");

      setLoginState(false);
      return;
    }

    setLoginState(true);
    setModalOpen(false);
  }, [data]);

  return (
    <form className="h-full w-full" action={formAction}>
      <div className="flex h-full w-full flex-col justify-between gap-7">
        {/* 헤더 */}
        <div className="relative w-full text-center">
          {/* 모달 제목 */}
          <span className="cursor-default text-2xl">로그인</span>

          {/* 모달 닫기 버튼 */}
          <button
            type="button"
            className="absolute -top-5 -right-5 cursor-pointer"
            onClick={onClickCloseModal}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="box-content stroke-[#d4d4d8] p-1 hover:stroke-[#5A80A5]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="5"
                y1="5"
                x2="19"
                y2="19"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="19"
                y1="5"
                x2="5"
                y2="19"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* 입력창 */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            {/* 이메일 */}
            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                className={`w-full rounded-sm border-[1px] p-4 text-sm focus:outline-[#5A80A5] ${inputError["email"].isError ? "border-red-500" : "border-zinc-300"}`}
                placeholder="이메일을 입력해주세요"
                onChange={onChangeInput}
                value={inputText["email"]}
                required
              />

              <div className="flex">
                <span className="cursor-default text-xs text-red-500">
                  {inputError["email"].msg}
                </span>
              </div>
            </div>

            {/* 비밀번호 */}
            <div className="flex flex-col gap-1">
              <input
                type="password"
                name="password"
                className={`w-full rounded-sm border-[1px] p-4 text-sm focus:outline-[#5A80A5] ${inputError["password"].isError ? "border-red-500" : "border-zinc-300"}`}
                placeholder="비밀번호를 입력해주세요"
                onChange={onChangeInput}
                value={inputText["password"]}
                required
              />

              <div className="flex items-end justify-between text-xs">
                <span className="min-w-30 cursor-default text-left text-red-500">
                  {inputError["password"].msg}
                </span>

                <span className="cursor-pointer text-right text-zinc-400 hover:text-zinc-500">
                  비밀번호 찾기
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 제출버튼 */}
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="flex-1 cursor-pointer rounded-sm border-[1px] border-[#5A80A5] bg-[#5A80A5] p-4 text-sm text-white hover:bg-[#486684]"
            disabled={isPending}
            onClick={onClickSubmitButton}
          >
            로그인
          </button>
        </div>
      </div>
    </form>
  );
}
