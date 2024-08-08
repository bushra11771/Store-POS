// import "./App.css"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import NewCustomerModal from "./views/NewCustomerModal";
import NewProductModal from "./views/NewProductModal";
// import Pos from "./views/Pos";
// import TransactionsView from "./views/TransectionView";
// import Pos from "./views/Pos";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./views/Login";
function App() {
  return (
    <>
    <Main />
    <NewCustomerModal />
    <NewProductModal />
    </>
    // <Pos />
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <Login />
    //       }
    //     />
    //     <Route path="signup" element={<>signup</>} />
    //     <Route element={<Main />}>
    //       <Route index path="pos" element={<POSView />} />
    //       <Route path="transactions" element={<TransactionsView />} />
    //       {/* <Route path="pos" element={<Pos />} /> */}
    //       <Route path="" element={<Contact />} />
    //     </Route>
    //     <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
