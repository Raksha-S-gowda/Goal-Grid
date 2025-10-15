import Taskform from './Components/Taskform';
import Tasklist from './Components/Tasklist';
import ProgressTracker from './Components/ProgressTracker';


function App() {
  return (
    <div>
      <h1>Goal Grid</h1>
      <p>A Friendly Goal Keeper</p>
      <Taskform/>
      <Tasklist/>
      <ProgressTracker/>
      <button>Clear all Tasks</button>
    </div>
  )
}
export default App;


