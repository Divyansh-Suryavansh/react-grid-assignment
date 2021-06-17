import './App.css';
import Topbar from './components/topbar';
import { BlogContent } from './components/web-content';


function App() {
  return (
    <div className="stories-sec">
      <Topbar/>
      <BlogContent/>
    </div>
  );
}

export default App;
