import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './component/ui/MenuBar';

import MainPage from './component/page/MainPage';
import AboutPage from './component/page/AboutPage';
import SkillPage from './component/page/SkillPage';
import ProjectPage from './component/page/ProjectPage';
import NotFound from './component/page/NotFound';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <MenuBar/>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/AboutPage" element={<AboutPage />}></Route>
            <Route path="/SkillPage" element={<SkillPage />}></Route>
            <Route path="/ProjectPage" element={<ProjectPage />}></Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;