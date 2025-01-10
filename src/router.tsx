import { BrowserRouter, Routes, Route } from "react-router";
import { PageLogin } from "./page/login/page-login";
import { PageUsers } from "./page/users/page-users";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<PageLogin />} />
        <Route path="/users" element={<PageUsers />} />
      </Routes>
    </BrowserRouter>
  );
}