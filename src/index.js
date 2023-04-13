import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { managers } from './managers'
import Header from './Header'
import Manager from './Manager'

function Page() {
  return (
    <>
      <Header />
      <ManagersList />
    </>
  )
}

function ManagersList() {
  return (
    <section className='managers'>
      {managers.map((manager, index) => {
        return <Manager {...manager} key={manager.id} number={index} />
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)
