import React from 'react'
import { BiCheck } from 'react-icons/bi';
import './list.css';

const List = ({ explain }) => {
  return (
    <li>
      <BiCheck className="service__list-icon" />  
      <p>{explain}</p>
    </li>  
  )
}

export default List