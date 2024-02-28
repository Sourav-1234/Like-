import logo from './logo.svg';
import './App.css';
import {HeartIcon,SpinnerIcon} from './icons'
import {useState} from 'react';
import './styles.css';


function App() {
  const [liked ,setLiked] =useState(false)
  const [isFetching,setIsFetching]=useState(false);
  const [error,setError]=useState(null);

  const handleLikeUnlike=()=>{
    setLiked(!liked);
  }



  return (
    <div className="App">
      <button className={`likeBtn ${liked?"":""}`} onClick={handleLikeUnlike} >
       <HeartIcon /> {liked?"Liked":"Like"}
      </button>
    </div>
  );
}

export default App;
