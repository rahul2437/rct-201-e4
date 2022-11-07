import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO

  const [list,setList] = useState<number[]>(initialArray);

  console.log(initialArray);
  
  const appendEnd = (ele: number) => {
    console.log({ele});
    list.push(ele);
    setList(list);
  }

  // refer readme.md for what to return
  return {
    list: list,
    appendStart: "",
    appendEnd: appendEnd,
    popStart: "",
    popEnd: "",
    clear: "",
    reset: "",
  }
};

export default useNumberList;
