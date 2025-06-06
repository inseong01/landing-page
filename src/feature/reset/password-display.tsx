import {
  ChangeEvent,
  MouseEvent,
  useActionState,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { UserResponse } from "@supabase/supabase-js";

import { changePasswordAction } from "../../components/app/modal/form/actions";

const initState = {} as UserResponse;
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

// react-router
// https://reactrouter.com/start/declarative/navigating

// supabase auth
// https://supabase.com/docs/reference/javascript/explain

/*
  - 입력창 오류 확인 점검 완료

  - 제출 정상 처리 점검 필요 (+라우터 이동)
  - 제출 비정상 처리 점검 필요 

  - 이메일 리다이렉션 링크 설정
*/
export default function ResetPasswordDisplay() {
  const [state, formAction, isPending] = useActionState(
    changePasswordAction,
    initState,
  );

  const [inputText, setInputText] = useState(initInputValueState);
  const [inputError, setInputError] = useState(initInputErrorState);

  const navigate = useNavigate();

  const { error } = state;

  useEffect(() => {
    if (error === undefined) return;

    const isServerError = error?.status?.toString().startsWith("4");
    if (isServerError) {
      alert("예기치 않은 오류가 발생했습니다.");
    } else {
      alert("비밀번호가 변경되었습니다.");
      navigate("/");
    }

    setInputText(initInputValueState);
    setInputError(initInputErrorState);
  }, [error, navigate]);

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
  function onClickSubmitButton(e: MouseEvent<HTMLButtonElement>) {
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
          } else if (inputText[key]?.length < 6) {
            isError = true;
            msg = "6글자 이상이어야 합니다";
          }

          acc[key] = { isError, msg };
          return acc;
        },
        {} as Record<string, { isError: boolean; msg: string }>,
      );

      setInputError(errorState);

      return;
    }
  }

  return (
    <form action={formAction} className="flex w-full flex-col gap-4">
      {/* 제목 박스 */}
      <div className="cursor-default text-xl">
        <span>비밀번호 재설정</span>
      </div>

      {/* 입력 박스 */}
      <div className="flex flex-col gap-1">
        <div className="flex w-full">
          <input
            type="password"
            name="password"
            className={`w-full rounded-sm border-[1px] p-4 text-sm focus:outline-[#5A80A5] ${inputError["password"].isError ? "border-red-500" : "border-zinc-300"}`}
            placeholder="재설정할 비밀번호를 입력해주세요"
            onChange={onChangeInput}
            value={inputText["password"]}
            required
            minLength={6}
          />
        </div>

        <div className="flex">
          <span className="cursor-default text-xs text-red-500">
            {inputError["password"].msg}
          </span>
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
          변경하기
        </button>
      </div>
    </form>
  );
}
