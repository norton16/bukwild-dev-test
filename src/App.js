import { React } from 'react'
import { Navbar } from './containers'
import { content } from './assets/json/content'

const App = () => {
  return (
    <div className="App">
        <Navbar content={content}/>
    </div>
  )
}

export default App;
