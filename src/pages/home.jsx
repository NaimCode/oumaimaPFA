import React, { useEffect } from 'react'
import Map from '../map'
import { userStore } from '../state'
import { useNavigate } from "react-router-dom";
import Dashboard from '../components/dashboard';
const Home = () => {
  const navigate = useNavigate();
  const {user,isBou} = userStore((state) => state)
  useEffect(() => {
  
    if (!user) {
      
      navigate("/auth", { replace: true });
    }else{
      if(isBou){
        navigate("/boutiquier", { replace: true });
      }
    }
    
    console.log("logged in",user.email)
    console.log("isBou",isBou);
  }, [navigate, user,isBou]);
  return (
  <></>
  )
}

export default Home