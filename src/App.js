import './App.css';
import Header from './Components/Header';
import Items from './Components/Items';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanel from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appItem_container">
        <Items
          Title='Model 3'
          desc='View Inventory'
          bgimg={Model3}
          lbt='Order Now'
          rbt='Demo Drive'
          twobtn='true'
          lbtl=''
          rbtl='' />
        <Items
          Title='Model X'
          desc='View Inventory'
          bgimg={ModelX}
          lbt='Order Now'
          rbt='Demo Drive'
          twobtn='true'
          lbtl=''
          rbtl='' />
        <Items
          Title='Model S'
          desc='View Inventory'
          bgimg={ModelS}
          lbt='Order Now'
          rbt='Demo Drive'
          twobtn='true'
          lbtl=''
          rbtl='' />
        <Items
          Title='Model Y'
          desc='View Inventory'
          bgimg={ModelY}
          lbt='Order Now'
          rbt='Demo Drive'
          twobtn='true'         
          lbtl=''
          rbtl='' />
        <Items
          Title='Solar Panel'
          desc='Lowest Cost Solar Panels in America'
          bgimg={SolarPanel}
          lbt='Order Now'
          rbt='Demo Drive'
          twobtn='true' 
          lbtl=''
          rbtl=''/>
        <Items
          Title='Solar Roof'
          desc='Produce Clean Energy From Your Roof'
          bgimg={SolarRoof}
          lbt='Order Now'
          rbt='Demo Drive'
          twobtn='true' 
          lbtl=''
          rbtl=''/>
        <Items
          Title='Accesories'
          desc=' '
          bgimg={Accessories}
          lbt='Order Now'
          rbt=''
          twobtn='false'
          lbtl=''
          rbtl='' />
      </div>

    </div>
  );
}

export default App;
