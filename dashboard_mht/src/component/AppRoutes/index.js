import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashBoard from "../../Pages/DashBoard";
import Employee from "../../Pages/Employee";
import Personal from "../../Pages/Personal";
import Staff from "../../Pages/Staff";
function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<DashBoard/>}></Route>
            <Route path="/Employee" element={<Employee/>}></Route>
            <Route path="/Personal" element={<Personal/>}></Route>
            <Route path="/Staff" element={<Staff/>}></Route>
        </Routes>
    )
}
export default AppRoutes