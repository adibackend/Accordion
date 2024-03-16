import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const SingleQuestion = ({temp}) => {
    const [lbutton,setButton]=useState(true)
    const[showwquestion,setShowQuestion]=useState(true)
const changeState=()=>{
    setShowQuestion(!showwquestion)
    setButton(!lbutton)
}

  return (
    <>
      <div className="">
        <h4 className="mr-12 font-semibold max-w-xl p-2 ">{temp.title}</h4>
        {showwquestion && (
          <p className="max-w-xl leading-loose p-2">{temp.info}</p>
        )}
      </div>
      {showwquestion ? (
        <button onClick={changeState} className=" bg-blue-200 rounded-full">
          <RemoveIcon sx={{ fontSize: 35 }} />
        </button>
      ): (
        <button onClick={changeState} className=" bg-blue-200 rounded-full">
          <AddIcon sx={{ fontSize: 35 }} />
        </button>
      ) }
    </>
  );
}
export default SingleQuestion