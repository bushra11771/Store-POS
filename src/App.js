// import "./App.css"
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import POSView from "./views/PosView";
import TransactionsView from "./views/TransectionView";
import PageNotFound from "./pages/PageNotFound";
import Login from "./views/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login />
          }
        />
        <Route path="signup" element={<>signup</>} />
        <Route element={<Main />}>
          <Route index path="pos" element={<POSView />} />
          <Route path="transactions" element={<TransactionsView />} />
          {/* <Route path="" element={<Contact />} /> */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
