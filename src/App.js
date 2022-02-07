
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Apple from './Component/Apple';
import Alibaba from './Component/Alibaba';
import Railes from './Component/Railes';
import Alphabet from './Component/Alphabet';
import Gujrat from './Component/Gujrat';
import Chhattisgarh from './Component/Chhattisgarh';

function App() {
  
  return (
    <div>
<Router>
         
         <Switch>
           <Route exact path="/">
             <Apple></Apple>
           </Route>           
           <Route path="/apple">
             <Apple></Apple>
           </Route>           
           <Route path="/alibaba">
             <Alibaba></Alibaba>
           </Route>           
           <Route path="/rails">
             <Railes></Railes>
           </Route>           
           <Route path="/alphabet">
             <Alphabet></Alphabet>
           </Route>           
           <Route path="/gujarat">
             <Gujrat></Gujrat>
           </Route>           
           <Route path="/chhattisgrah">
             <Chhattisgarh></Chhattisgarh>
           </Route>           
         </Switch>
         
       </Router>
    </div>
  );
}

export default App;
