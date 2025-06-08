import {
  ChangeEvent,
  MouseEvent,
  useActionState,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { UserResponse } from "@supabase/supabase-js";

import { updatePasswordAction } from "../../utils/form/actions";
import {
  initInputErrorState,
  initInputValueState,
} from "../../utils/const/common";

import InputErrorMessage from "../../components/app/form/input-error-message/message-index";
import SubmitButton from "../../components/app/form/submit-button/button-index";
import FormTitle from "../../components/app/form/title/title-index";

const initState = {} as UserResponse;

// react-router
// https://reactrouter.com/start/declarative/navigating

// supabase auth
// https://supabase.com/docs/reference/javascript/explain

export default function ResetPasswordDisplay() {
  const [state, formAction, isPending] = useActionState(
    updatePasswordAction,
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
  async function onClickSubmitButton(e: MouseEvent<HTMLButtonElement>) {
    // 빈 형식 검증
    const isInputEmpty = inputText["password"].length === 0;
    if (isInputEmpty) {
      e.preventDefault();

      setInputError((prev) => {
        return {
          ...prev,
          password: {
            isError: isInputEmpty,
            msg: "빈 칸을 입력해주세요.",
          },
        };
      });

      return;
    }

    // 최소 글자 수 검증
    const isInputMinLength = inputText["password"].length < 6;
    if (isInputMinLength) {
      e.preventDefault();

      setInputError((prev) => {
        return {
          ...prev,
          password: {
            isError: isInputEmpty,
            msg: "6글자 이상이어야 합니다.",
          },
        };
      });

      return;
    }
  }

  return (
    <form action={formAction} className="flex w-full flex-col gap-4">
      {/* 제목 박스 */}
      <div>
        <FormTitle text="비밀번호 재설정" />
      </div>

      {/* 입력 박스 */}
      <div className="flex flex-col gap-1">
        <div className="flex w-full">
          <input
            type="password"
            name="password"
            className={`w-full rounded-sm border-[1px] p-4 text-sm focus:outline-[#5A80A5] ${inputError["password"].isError ? "border-red-500" : "border-zinc-300"}`}
            placeholder="새로운 비밀번호를 입력해주세요"
            onChange={onChangeInput}
            value={inputText["password"]}
            required
            minLength={6}
          />
        </div>

        <div className="flex">
          {/* 오류 메시지 */}
          <InputErrorMessage msg={inputError["password"].msg} />
        </div>
      </div>

      {/* 제출버튼 */}
      <div className="flex flex-col gap-2">
        <SubmitButton
          disabled={isPending}
          onClick={onClickSubmitButton}
          text={"변경하기"}
        />
      </div>
    </form>
  );
}
