"use client"
import React, { useState } from 'react'
import './page.css'
import { Input } from '@/components/input'
import { Age } from '@/components/age'
import { Button } from '@/components/button'
import { AddIcon } from '@/components/addicon'
import { Text } from '@/components/text'


export default function Home() {

  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [disable, setDisable] = useState(false);

  if(disable){
    setDisable(true); 
  }

const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent >) => {
  e.preventDefault();
  const currentDate = new Date();
  const pastDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const diff = Math.floor(currentDate.getTime() - pastDate.getTime());
  const numberOfday = 1000 * 60 * 60 * 24;
  const numberOfdays = Math.round(diff / numberOfday);
  const numberOfmonths = Math.round(numberOfdays / 31);
  const numberOfyears = Math.round(numberOfmonths / 12);

  const ageCalculator = {
    years: numberOfyears,
    months: numberOfmonths,
    days: numberOfdays
  }

  setAge(ageCalculator);
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
            <div>
              <Text name={"day"} >Day</Text> 
              <Input disable={disable} name={"dayInput"} onChange={handleChange}/>
            </div>
            <div>
              <Text name={"month"} >Month</Text>
              <Input disable={disable} name={"monthInput"} onChange={handleChange}/>
            </div>
            <div>
              <Text name={"year"} >Year</Text>
              <Input disable={disable} name={"yearInput"} onChange={handleChange}/>
            </div>
        </div>
        <div className="outputAge">
        <div className='addButton' >
          <Button onClick={handleClick}>
            <AddIcon/>
          </Button>
        </div>
          <Age name={"age"}> {age.years} years </Age>
          <Age name={"age"}> {age.months} months </Age>
          <Age name={"age"}> {age.days} days </Age>
        </div>
      </div>
    </div>
  )
}

