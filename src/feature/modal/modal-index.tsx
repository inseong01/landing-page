import { useEffect } from "react";
import { useAtom } from "jotai";
import ReactModal from "react-modal";

import { modalStateAtom } from "../../utils/atom/atom";

import LoginForm from "./form/login-form";

const MODAL_STYLE_CSS: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
  },
  content: {
    width: "100%",
    maxWidth: "450px",
    minHeight: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    padding: "40px",
    borderRadius: 10,
    zIndex: 999,
  },
};

ReactModal.setAppElement("#root");

export default function ModalDisplay({ type }: { type: string }) {
  const [isModalOpen] = useAtom(modalStateAtom);

  /* 스크롤 제한 */
  useEffect(() => {
    function preventScroll(e: Event) {
      if (isModalOpen) {
        e.preventDefault();
      }
    }
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isModalOpen]);

  switch (type) {
    case "login": {
      return (
        <ReactModal isOpen={isModalOpen} style={MODAL_STYLE_CSS}>
          <LoginForm />
        </ReactModal>
      );
    }
    default: {
      console.error("Unexpected modal display type error : " + type);
      return <></>;
    }
  }
}
