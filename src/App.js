import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";

const Menu = ()=>{
  return <ul>
    <li><NavLink className="nav-link" to="/profile">Профиль</NavLink></li>
    <li><NavLink className="nav-link" to="/settings">Настройки</NavLink></li>
    <li><NavLink className="nav-link" to="/users">Пользователи</NavLink></li>
  </ul>
}

const Profile = ()=>{
  return <div className="row">
    <div className="col-2">
      <img width="100%" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
    </div>
    <div className="col-10">
      <h1>Иван Иванов</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt facilis maxime, porro praesentium qui quibusdam quod, ratione recusandae sapiente soluta vel. Aliquid fugit labore laudantium minima molestias repellat suscipit!</p>
    </div>
  </div>
}

const Settings = ()=>{
  return <div className="container rounded">
    <p>Имя: Иван</p>
    <p>Фамилия: Иванов</p>
    <p>Email: ivanov@ivan.ru</p>
    <p>ID: XX</p>
  </div>}


const Users = ()=>{
  return <div className="container rounded">
    <table className="table">
      <thead className="thead-light">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Имя</th>
        <th scope="col">Фамилия</th>
        <th scope="col">Email</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Олег</td>
        <td>Олегов</td>
        <td>olegov@oleg.ru</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Андрей</td>
        <td>Андреев</td>
        <td>andreev@andrey.ru</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Борис</td>
        <td>Борисов</td>
        <td>borisov@boris.ru</td>
      </tr>
      </tbody>
    </table>
  </div>}

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
          <div className="row">
            <div className="col-3">
              <Menu/>
            </div>
            <div className="col-9">
              <Route path="/profile" render={()=>{return <Profile/>}}/>
              <Route path="/settings" render={()=>{return <Settings/>}}/>
              <Route path="/users" render={()=>{return <Users/>}}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;