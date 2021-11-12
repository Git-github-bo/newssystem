import Child from "./Child.js"
import  "./App.css"
import { useEffect } from "react"
import axios from "axios"
function App() {

    useEffect(()=>{
      axios.get("/ajax/comingList?ci=1055&limit=10&movieIds=&token=&optimus_uuid=7F385D8003BF11EC81E61F6DC556AD4F062FC86AA2634C098119041D21CF21AD&optimus_risk_level=71&optimus_code=10").then(res=>{
        console.log(res)
      })
    },[])
  return <div>
    app
    <ul>
      <li>11111</li>
      <li>22222</li>
    </ul>
    <Child/>
  </div>
}
export default App;
