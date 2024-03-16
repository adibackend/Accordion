import SingleQuestion from './SingleQuestion';
import { IoAddOutline } from 'react-icons/io5';

const Questions = ({ questions }) => {
  return (
    <>
      <div className="bg-white h-[70%] my-auto rounded-xl hover:shadow-xl shadow-sm p-10">
        <h1 className="text-center mb-4">Questions</h1>
        <div className='px-10 grid '>
          {questions.map((temp) => {
            return (
              <>
                <div key={temp.id} className="">
                  <div className="mt-4 flex items-center justify-between space-y-3 shadow-md rounded-sm p-6 bg-red-50 ">
                    <SingleQuestion key={temp.id} temp={temp} />
                    
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Questions;
