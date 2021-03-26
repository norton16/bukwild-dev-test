import { React } from 'react'
import { Navbar } from './containers'
import { content } from './assets/json/content'

const App = () => {

  return (
    <div className="App">
      {/* JSON data is passed to the Navbar UI layer first */}
      <Navbar content={content}/>
    </div>
  )
}

export default App;
