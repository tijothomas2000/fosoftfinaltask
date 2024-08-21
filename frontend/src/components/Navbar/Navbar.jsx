import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className="navbarcontainer">
        <div className="branding">
          <img src="src\assets\logo.jpg" alt="Brand Logo" />
        </div>
        <div className="profileandsearchbar">
          <div className="searchbar">
            <input type="text" placeholder='Search' />
            <SearchIcon className='searchicon' />
          </div>
          {currentUser ? <div className="profile">
            <img src="src\assets\userlogo.png" alt="User Logo" />
            <p style={{ color: 'white', paddingLeft: `${10}px` }}>{currentUser.username}</p>
          </div> : <button className='loginbtn' onClick={() => navigate('/login')} >LOGIN</button>}
        </div>
        <DragHandleIcon fontSize='large' className='menuicon' onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className={`${isOpen ? "menuopen open" : "menuopen"}`}>
        <div className="menucontainer">
          <div className="searchbar">
            <input type="text" placeholder='Search' />
            <SearchIcon className='searchicon' />
          </div>
          {currentUser ? <div className="profile">
            <img src="src\assets\userlogo.png" alt="User Logo" />
          </div> : <button className='loginbtn'>LOGIN</button>}
        </div>
      </div>
    </div>
  )
}
