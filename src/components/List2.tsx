import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
};
const List2 = (props: List2Props) => {

  const {list,appendEnd} = useNumberList([4,5]);

  const [val,setVal] = useState<number>(0);

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">List 2</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{list.join(" ")}</div>

      <input data-testid="list2-input" value={val} onChange={(e)=>setVal(parseInt(e.target.value))} />
      <button data-testid="list2-btn-append-end"
        onClick={()=>appendEnd(val)}
      >
        Append End
      </button>
      <button data-testid="list2-btn-pop-start">
        Pop Start
      </button>
      <button data-testid="list2-btn-clear">
        Clear
      </button>
      <button data-testid="list2-btn-reset">
        Reset
      </button>
    </div>
  );
};

export default List2;
