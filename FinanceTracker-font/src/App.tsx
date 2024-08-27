import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./component/create.tsx";
import Read from "./component/read.tsx";
import Update from "./component/update.tsx";

function App() {

  return (
      <>
          <div>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Create />} />
                      <Route path="/read" element={<Read />} />
                      <Route path="/update" element={<Update />} />
                  </Routes>
              </BrowserRouter>
          </div>
      </>
  )
}

export default App
