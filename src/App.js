import './styles/global.css'
import ExplorerCard from './components/ExplorerCard';
import ExplorerPicture from './components/ExplorerPicture';

function App() {
  return (
    <div className='parent'>
      <div className="row-one">
        <ExplorerCard />
        <ExplorerPicture />
      </div>
    </div>
  );
}

export default App;
