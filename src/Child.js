import React from 'react';
import style from './Child.module.scss'


export default function Child() {
  return (
    <div>
       <ul>
           <li className={style.item}>child-111111</li>
           <li className={style.item}>child-222222</li>
       </ul>
    </div>
  )
}