import House from "./components/pages/House"
import Houses from "./components/pages/Houses"
import Member from "./components/pages/Member"
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import gameOfThrones from "./gameOfThrones"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/houses"
            element={<Houses data={gameOfThrones}/>} 
          />
          <Route
            exact path="/houses/:id"
            element={<House data={gameOfThrones}/>}
            // exact path="/houses/:id" 
            // render={(props) => {
            //   // compare the url params with the data id to find the data
            //   const house = gameOfThrones.find(house => house.id.toString() === props.match.params.id)
            //   // spread the data into the props
            //   props = {...props, ...house}
            //   // render component with new props
            //   return <House {...props}/>
            // }}  
          />
          <Route
            path="/houses/:houseId/members/:memberId"
            element={<Member data={gameOfThrones}/>} 
          />
          <Route
            path="*"
            element={<h1>404 Error</h1>} 
          />
        </Routes>
      </Router>
    </div>
  )
}