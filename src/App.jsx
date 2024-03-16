import { useState } from "react";
import data from './data'
import Questions from "./Questions";
const App = () => {
const [questions,setQuestions]=useState(data)
console.log(questions)
  return (<>
  <div className="flex justify-center min-h-[100vh] ">

  <Questions questions={questions} />
  </div>
  </>);
};
export default App;
