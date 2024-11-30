import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import UpperNav from "./components/upperNav/UpperNav";
import LowerNav from "./components/lowerNav/LowerNav";
import UserInfo from "./components/userInfo/UserInfo";
import BgImage from "./components/BgImage";
import { ThemeDataProvider } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeDataProvider>
        <div className="relative   w-[100vw] h-[100vh]">
          <BgImage />
          <div className=" grid grid-rows-[auto,1fr,auto] relative z-20 h-[100%] w-[100%] ">
            <UpperNav />
            <UserInfo />
            <LowerNav />
          </div>
          <SideBar />
        </div>
      </ThemeDataProvider>
    </QueryClientProvider>
  );
}

export default App;
