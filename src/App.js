import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import reactQuestions from './data/react'
function App() {
  const [started, setStarted] = useState(false)
  const [intervalID, setIntervalID] = useState('')
  const arrIter = reactQuestions[Symbol.iterator]();

  // ====================== Start Sending Notification Function  ===================================
  const sendQuesNotification = ()=>{
      setStarted(true)
      let title = "ReactJS Interview";
      let icon = `https://i.imgur.com/rKLqDZ4.png`;

       const intervar = setInterval((started) => {
        const currObj = arrIter.next().value
        let body = `${currObj.question}`;
        let notification = new Notification(title,{ body, icon });
        notification.onclick = () => { 
              notification.close();
        }
        setTimeout(  () => {
          let body = `${currObj.answer}`;
          let notification = new Notification(title,{  body, icon });
          notification.onclick = () => { 
                notification.close();
          }
        }, 2500);
      }, 5000);
      setIntervalID(intervar)
  }

  // ====================== Stop Sending Notification Function ===================================

  const stopSendingNotification = ()=>{
    console.log("interval ID:", intervalID)
    clearInterval(intervalID);
    console.log("interval ID Removed:", intervalID)
    setStarted(false)
  }

  return (
    <div className='h-full w-full overflow-hidden'>
      <Header/> 
        <div className='mt-3 p-1'>
          <div>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected disabled>Technology</option>
              <option value="Reactjs" selected>Reactjs</option>
              <option value="NodeJS" disabled>NodeJS</option>
              <option value="Javascript" disabled>Javascript</option>
              <option value="HTML" disabled>HTML</option>
              <option value="CSS" disabled>CSS</option>
            </select>
          </div>
          <div className='mt-3'>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected disabled>Levels</option>
              <option value="Beginner" disabled>Beginner</option>
              <option value="Intermediate" selected>Intermediate</option>
              <option value="Expert" disabled>Expert</option>
            </select>
          </div>
        </div>
      <div className='flex items-center justify-center my-2'>
      {
       !started &&  <button  onClick={sendQuesNotification} className="rounded relative inline-flex group items-center justify-center w-full px-10 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
        <span className="relative">Start</span>
      </button> 
      } 
      {
       started &&  <button  onClick={stopSendingNotification} className="rounded relative inline-flex group items-center justify-center w-full px-10 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
        <span className="relative">Stop</span>
      </button> 
      }
      </div>
    </div>
  );
}

export default App;
