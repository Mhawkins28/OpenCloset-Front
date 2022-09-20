import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
// import * as userService from "./utils/userService";
import HomePage from "./pages/HomePage"
import ClosetCatPage from './pages/ClosetPages/ClosetCatPage';
import ItemsPage from './pages/ClosetPages/ItemsPage';
import LookbookCatPage from './pages/LookbookPages/LookbookCatPage';
import NewItem from './pages/ClosetPages/NewItem'
import ItemDetailPage from './pages/ClosetPages/ItemDetailPage'
import EditItem from './pages/ClosetPages/EditItem'
import NewLook from './pages/LookbookPages/NewLook'
import EditLook from './pages/LookbookPages/EditLook'
import LookDetailPage from './pages/LookbookPages/LookDetailPage'
import LooksPage from './pages/LookbookPages/LooksPage'
import InspoPage from './pages/InspirationPages/InspoPage';
import LoginPage from './pages/UserAuthPages/LoginPage';
import CreateUserPage from './pages/UserAuthPages/CreateUserPage';


function App() { 
  const [ items, setItems ]= useState([])
  const [ looks, setLooks ]= useState([])
  const [ user, setUser ] = useState(
    // JSON.parse(window.sessionStorage.getItem("user")) !== null
    // ? JSON.parse(window.sessionStorage.getItem("user"))
    // : null
  )

  const addItem = (item) => {
    setItems([...items, item])
  }

  useEffect(() => {
    fetch('http://localhost:3001/items')
    .then( res => res.json())
    .then( items => setItems(items))
  }, []);

  const updateItemState = (id) => {
    setItems(items.filter(item => item._id !== id))
  }

  const addLook = (look) => {
    setLooks([...looks, look])
  }

  useEffect(() => {
    fetch('http://localhost:3001/looks')
    .then( res => res.json())
    .then(looks => setLooks(looks))
  }, []);

  const updateLookState = (id) => {
    setLooks(looks.filter(look => look._id !== id))
    }



  return (
      <Routes>
        <Route path='/' element={<HomePage user={user} setUser={setUser}/>} />
        <Route path='/closet' element={<ClosetCatPage />} />
        <Route path='/items' element={<ItemsPage items={items} updateItemState={updateItemState} />} />
        <Route path='/items/new' element={<NewItem addItem={addItem} />} />
        <Route path='/items/edit/:id' element={ <EditItem setItems={setItems}/>} />
        <Route path='/items/:id' element={ <ItemDetailPage items={items} />} />
        <Route path='/lookbook' element={<LookbookCatPage />} />
        <Route path='/looks' element={<LooksPage looks={looks} updateLook-State={updateLookState}/>} />
        <Route path='/looks/new' element={<NewLook addLook={addLook}/>} />
        <Route path='/looks/edit/:id' element={ <EditLook setLooks={setLooks}/>} />
        <Route path='/looks/:id' element={ <LookDetailPage looks={looks}/>} />
        <Route path='/inspo' element={<InspoPage />} />
        <Route path='/login' element={ <LoginPage setUser={setUser} user={user} />} />
        <Route path='/signup' element={<CreateUserPage setUser={setUser} user={user} />} /> 
        {/* <Route path='*' element={<Navigate to='/closet' replace/>} /> */}
    </Routes>
);
}
export default App;