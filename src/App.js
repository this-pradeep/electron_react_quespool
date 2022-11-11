import React, { useEffect, useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import quespool from './images/quespool.svg'
import reactQuestions from './data/react'
function App() {
  const [currQues, setCurrQues] = useState("")
  const [currAns, setCurrAns] = useState("")
  const [started, setStarted] = useState(false)

  useLayoutEffect(() => {
    const isBrowser = matchMedia("(display-mode: browser)").matches;
    if (!isBrowser) {
       window.resizeTo(480, 800);
    }
  }, [])


  const arrIter = reactQuestions[Symbol.iterator]();
  const sendQuesNotification = async (start)=>{
      setStarted(true)
      var intervalId = setInterval((start) => {
        const currObj = arrIter.next().value
        if (!start || arrIter.next().done) {
          clearInterval(intervalId);
          setStarted(false)
        }
        //  setCurrQues(currObj.question)
        let title = "ReactJS Interview Question";
        let icon = `https://i.imgur.com/rKLqDZ4.png`;
        let body = `${currObj.question}`;
        let notification = new Notification(title,{ body, icon });
        notification.onclick = () => { 
              notification.close();
        }
        setTimeout(  () => {
          //  setCurrAns(currObj.answer)  
          let title = "ReactJS Interview Question";
          let icon = `https://i.imgur.com/rKLqDZ4.png`;
          let body = `${currObj.answer}`;
          let notification = new Notification(title,{  body, icon });
          notification.onclick = () => { 
                notification.close();
          }
        }, 5000);
        setTimeout(() => {
          setCurrAns('')  
          setCurrQues('')  
        }, 10000);
      }, 15000, start);
 
  }

  return (
    <div className='h-full w-full'>
      <Header/> 
      <div>
          {
            currQues && <h1 className='text-4xl text-center my-10 text-red-500'>{currQues}</h1>
          }
            {
            currAns && <h1 className='text-4xl text-center my-10 text-green-500'>{currAns}</h1>
          }
        </div>
      <div className='flex items-center justify-center my-10'>
        
      {
       !started &&  <button  onClick={()=>sendQuesNotification(true)} className="rounded relative inline-flex group items-center justify-center px-10 py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
        <span className="relative">Start</span>
      </button> 
      } 
      {
       started &&  <button  onClick={()=>sendQuesNotification(false)} className="rounded relative inline-flex group items-center justify-center px-10 py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
        <span className="relative">Stop</span>
      </button> 
      }
      </div>
    </div>
  );
}

export default App;
