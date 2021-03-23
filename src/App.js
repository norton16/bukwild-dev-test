import { Navbar } from './containers'
import {data} from '../src/assets/json/content'

const App = () => {
  return (
    <div className="App">
        <Navbar data={data}/>
    </div>
  );
}

export default App;
