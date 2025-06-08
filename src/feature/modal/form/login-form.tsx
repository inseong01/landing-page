import {
  ChangeEvent,
  MouseEvent,
  useActionState,
  useEffect,
  useState,
} from "react";
import { useAtom } from "jotai";
import { AuthTokenResponsePassword } from "@supabase/supabase-js";

import { modalStateAtom } from "../../../utils/atom/atom";
import { supabase } from "../../../utils/supabase/supabase";
import { loginAction } from "../../../utils/form/actions";
import {
  InitInputErrorState,
  initInputErrorState,
  InitInputValueState,
  initInputValueState,
} from "../../../utils/const/common";

import InputErrorMessage from "../../../components/app/form/input-error-message/message-index";
import SubmitButton from "../../../components/app/form/submit-button/button-index";
import ClickButton from "../../../components/app/form/click-button/button-index";
import FormTitle from "../../../components/app/form/title/title-index";

const initState = {} as AuthTokenResponsePassword;

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initState);
  const { error } = state;

  const [inputText, setInputText] = useState(initInputValueState);
  const [inputError, setInputError] = useState(initInputErrorState);
  const [needSearchPassword, setSearchPassword] = useState(false);

  const [, setModalOpen] = useAtom(modalStateAtom);

  useEffect(() => {
    if (error === undefined) return;

    const isServerError = error?.status?.toString().startsWith("4");
    if (isServerError) {
      alert("사용자 정보를 찾을 수 없습니다.");
    } else {
      alert("로그인 되었습니다.");
      setModalOpen(false);
    }

    setInputText(initInputValueState);
    setInputError(initInputErrorState);
  }, [error, setModalOpen]);

  /* 모달 닫기 */
  function onClickCloseModal() {
    if (isPending) {
      alert("로그인 처리 중입니다.");
      return;
    }

    setModalOpen(false);
  }

  /* 입력 함수 */
  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value.trim();

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
  async function onClickSubmitButton(e: MouseEvent<HTMLButtonElement>) {
    // 빈 형식 검증
    const isInputEmpty = Object.entries(inputText).some(
      ([, value]) => value.length === 0,
    );
    if (isInputEmpty) {
      e.preventDefault();

      const errorState = Object.keys(inputText).reduce(
        (acc, key) => {
          let isError = false;
          let msg = "";

          if (!inputText[key]?.length) {
            isError = true;
            msg = "빈 칸을 입력해주세요";
          } else if (key === "password" && inputText[key]?.length < 6) {
            isError = true;
            msg = "6글자 이상이어야 합니다";
          }

          acc[key] = { isError, msg };

          return acc;
        },
        {} as Record<string, { isError: boolean; msg: string }>,
      );

      setInputError(errorState);
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

    // 비밀번호 재설정
    if (needSearchPassword) {
      e.preventDefault();
      const user_email = inputText["email"];
      const { error } = await supabase.auth.resetPasswordForEmail(user_email, {
        redirectTo: "http://localhost:5173/reset/password",
      });

      if (error?.code?.startsWith("4")) {
        alert("사용자 정보에 요류가 발생했습니다.");
        return;
      }

      alert("메일을 확인해주세요.");
    }
  }

  /* 형식 전환 */
  function onClickChangeForm() {
    setSearchPassword((prev) => !prev);
    setInputText(initInputValueState);
    setInputError(initInputErrorState);
  }

  return (
    <form className="h-full w-full" action={formAction}>
      <div className="flex h-full w-full flex-col justify-between gap-7">
        {/* 헤더 */}
        <div className="relative w-full text-center">
          {/* 모달 제목 */}
          <FormTitle
            text={!needSearchPassword ? "로그인" : "비밀번호 재설정"}
          />

          {/* 모달 닫기 버튼 */}
          <button
            type="button"
            className="absolute -top-5 -right-5 cursor-pointer"
            onClick={onClickCloseModal}
          >
            <ICON_CLOSE />
          </button>
        </div>

        {/* 입력창 */}
        <div className="flex flex-col gap-2">
          {!needSearchPassword ? (
            // 로그인 화면
            <LoginInputBox
              inputText={inputText}
              inputError={inputError}
              onChangeInput={onChangeInput}
              onClickChangeForm={onClickChangeForm}
            />
          ) : (
            // 비밀번호 찾기 화면
            <SearchPasswordBox
              inputText={inputText}
              inputError={inputError}
              onChangeInput={onChangeInput}
              onClickChangeForm={onClickChangeForm}
            />
          )}
        </div>

        {/* 제출버튼 */}
        <div className="flex flex-col gap-2">
          <SubmitButton
            disabled={isPending}
            onClick={onClickSubmitButton}
            text={!needSearchPassword ? "로그인" : "메일 전송"}
          />
        </div>
      </div>
    </form>
  );
}

function LoginInputBox({
  inputText,
  inputError,
  onChangeInput,
  onClickChangeForm,
}: {
  inputText: InitInputValueState;
  inputError: InitInputErrorState;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickChangeForm: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {/* 이메일 */}
      <div className="flex flex-col gap-1">
        <input
          type="text"
          name="email"
          className={`w-full rounded-sm border-[1px] p-4 text-sm focus:outline-[#5A80A5] ${inputError["email"].isError ? "border-red-500" : "border-zinc-300"}`}
          placeholder="이메일을 입력해주세요"
          onChange={onChangeInput}
          value={inputText["email"]}
          required
        />

        <div className="flex">
          {/* 오류 메시지 */}
          <InputErrorMessage msg={inputError["email"].msg} />
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
          minLength={6}
        />

        <div className="flex items-end justify-between">
          {/* 오류 메시지 */}
          <InputErrorMessage msg={inputError["password"].msg} />

          {/* 모달 전환 버튼 */}
          <ClickButton onClick={onClickChangeForm} text="비밀번호 찾기" />
        </div>
      </div>
    </div>
  );
}

function SearchPasswordBox({
  inputText,
  inputError,
  onChangeInput,
  onClickChangeForm,
}: {
  inputText: InitInputValueState;
  inputError: InitInputErrorState;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickChangeForm: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {/* 이메일 */}
      <div className="flex flex-col gap-1">
        <input
          type="text"
          name="email"
          className={`w-full rounded-sm border-[1px] p-4 text-sm focus:outline-[#5A80A5] ${inputError["email"].isError ? "border-red-500" : "border-zinc-300"}`}
          placeholder="이메일을 입력해주세요"
          onChange={onChangeInput}
          value={inputText["email"]}
          required
        />

        <div className="flex items-end justify-between text-xs">
          {/* 오류 메시지 */}
          <InputErrorMessage msg={inputError["email"].msg} />

          {/* 모달 전환 버튼 */}
          <ClickButton onClick={onClickChangeForm} text="로그인 하기" />
        </div>
      </div>
    </div>
  );
}

function ICON_CLOSE() {
  return (
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
  );
}
