import { useEffect, useState } from "react";

const useClock = () => {
  const [clock,setClock] = useState<string>(new Date().toLocaleTimeString());
  useEffect(()=>{
    let id = setInterval(()=>{
      setClock(new Date().toLocaleTimeString());
    },1000);
    return () => clearInterval(id);
  },[]);
  let [H,M,S] = clock.trim().split(":");
  return {
    hours: H,
    minutes: M,
    seconds: S
  }
};

export default useClock;
