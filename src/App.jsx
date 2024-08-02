import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import animation from './animation.json'
import Lottie from 'lottie-react';

function App() {
  

  return (
    <>
    <div className="home-container">
   
      <h1 className='top'>Full Stack Course Projects  <Lottie animationData={animation} style={{ width: 250, height: 250 }} className='anim' />  </h1>
      <table>
        <tr>
          <th>Week</th>
          <th>Project Name</th>
          <th>Source Code</th>
          <th>Link</th>
        </tr>
        <tr>
          <td>2</td>
          <td>TicTacToe</td>
          <td><a href="https://github.com/Swapnilrupakhetee/tictactoe"><button>Code</button></a></td>
          <td> <a href="https://tictactoe-nine-bay.vercel.app/"><button>Link</button></a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Counter App</td>
          <td><a href="https://github.com/Swapnilrupakhetee/fullstack-countero"><button>Code</button></a></td>
          <td><a href="https://fullstack-counter.vercel.app/"><button>Link</button></a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Todo App</td>
          <td> <a href="https://github.com/Swapnilrupakhetee/fullstack-todo"><button>Code</button></a></td>
          <td> <a href="https://fullstack-todo-rho.vercel.app/"><button>Link</button></a></td>
        </tr>
      </table>
    </div>
      
    </>
  )
}

export default App
