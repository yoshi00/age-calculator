"use client"
import React, { useState } from 'react'
import './page.css'
import { Input } from '../components/input'
import { Age } from '../components/age'
import { Button } from '../components/button'
import { AddIcon } from '@/components/addicon'


export default function Home() {

  const [age, setAge] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  const currentDate = new Date();
  const pastDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const diff = Math.floor(currentDate.getTime() - pastDate.getTime());
  const numberOfday = 1000 * 60 * 60 * 24;
  const days = Math.round(diff / numberOfday);
  const months = Math.round(days / 31);
  const years = Math.round(months / 12);

  const ageString = `${years} years ${months} months ${days} days`;
  setAge(ageString);
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  if (name === "dayInput") {
    setDay(value);
  } else if (name === "monthInput") {
    setMonth(value);
  } else if (name === "yearInput") {
    setYear(value);
  }
};
  return (
    <div className='main'>
      <div className='container'>
        <div className='inputStyles'> 
          <Input name={"dayInput"} onChange={handleChange}/>
          <Input name={"monthInput"} onChange={handleChange}/>
          <Input name={"yearInput"} onChange={handleChange}/>
        </div>
      <div className="outputAge">
          <Button onClick={handleClick}>
            <AddIcon/>
          </Button>
        <Age name={"age"}>{age}</Age>
      </div>
      </div>
    </div>
  )
}

