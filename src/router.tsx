import { BrowserRouter, Routes, Route } from 'react-router';
import { PageLogin } from './page/login/page-login';
import { PageUsers } from './page/users/page-users';
import { PageAddUser } from './page/add-user/page-add-user';
import { ProtectedRoute } from './components/protected-route';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<PageLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/users' element={<PageUsers />} />
          <Route path='/users/add' element={<PageAddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
