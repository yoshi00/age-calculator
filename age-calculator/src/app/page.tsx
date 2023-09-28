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
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  
const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent >) => {
  const currentDate = new Date();
  const pastDate = new Date(year, month - 1, day);
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
  const value = event.target.type === "number" && !isNaN(event.target.valueAsNumber) ? event.target.valueAsNumber : Number(event.target.value);
  const { name } = event.target;
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
              <Input name={"dayInput"} onChange={handleChange}/>
            </div>
            <div>
              <Text name={"month"} >Month</Text>
              <Input name={"monthInput"} onChange={handleChange}/>
            </div>
            <div>
              <Text name={"year"} >Year</Text>
              <Input name={"yearInput"} onChange={handleChange}/>
            </div>
        </div>
        <div className="outputAge">
        <div className='addButton' >
          <Button onClick={handleClick}>
            <AddIcon/>
          </Button>
        </div>
          <Age number={age.years} data={"Years"}/>
          <Age number={age.months} data={"Months"}/>
          <Age number={age.days} data={"Days"}/>
        </div>
      </div>
    </div>
  )
}

