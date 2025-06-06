import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
import ResetPasswordDisplay from "./feature/reset/password-display.tsx";
import NotFount from "./feature/not-found/index.tsx";
import ResetDisplay from "./feature/reset/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 루트 페이지 */}
        <Route path="/" element={<App />} />

        {/* 재설정 페이지 */}
        <Route element={<ResetDisplay />}>
          <Route path="reset/password" element={<ResetPasswordDisplay />} />
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
