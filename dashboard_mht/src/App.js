import { Space } from "antd";
import './App.css';
import AppHeader from "./component/AppHeader";
import SlideMenu from "./component/SlideMenu";
import PageContent from "./component/PageContent";
import AppFooter from "./component/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Space className="SlideMenuAndPageContent">
        <SlideMenu></SlideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter/>
    </div>
  );
}

export default App;
