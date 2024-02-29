import logo from './logo.svg';
import './App.css';
import {HeartIcon,SpinnerIcon} from './icons'
import {useState} from 'react';
import './styles.css';


function App() {
  const [liked ,setLiked] =useState(false)
  const [isFetching,setIsFetching]=useState(false);
  const [error,setError]=useState(null);

  const handleLikeUnlike=async ()=>{

    
    setLiked(!liked);
    setError(null);
    try{
      const response= await fetch("https://www.greatfrontend.com/api/questions/like-button",{
        method:"POST",
        headers:{"Content-Type":"applications/json"},
        body:JSON.stringify({
          action:liked?"unlike":"like",

        }),

      },
      );
        if(response.status>=200 && response.status<300){
          setLiked(!liked)
        }
        else{
          const res=await response.json();
          setError(res.message);
          return;
        }



      console.log(await response.json())
    }finally{
      setIsFetching(false);
    }
  }



  return (
    <div className="App">
      <button className={`likeBtn ${liked?"":""}`} onClick={handleLikeUnlike} >
       {isFetching?<SpinnerIcon/>:<HeartIcon />}{liked?"Liked":"Like"}
      </button>
      {error && <div  className="error">{error}</div> }
    </div>
  );
}

export default App;
