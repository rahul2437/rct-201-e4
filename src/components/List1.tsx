import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
};
const List1 = (props: List1Props) => {

  const {list} = useNumberList([1,2,3]);

  const [val,setVal] = useState<number>(0);


  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">List 1</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">{/* Each element in a list */}</div>
      

      
      <input data-testid="list1-input" value={val} onChange={(e)=>setVal(parseInt(e.target.value))}/>
      <button data-testid="list1-btn-append-start">
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end">
        Pop End
      </button>
      <button data-testid="list1-btn-clear">
        Clear
      </button>
      <button data-testid="list1-btn-reset">
        Reset
      </button>
    </div>
  );
};

export default List1;
