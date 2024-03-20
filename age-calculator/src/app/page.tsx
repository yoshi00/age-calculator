"use client"
import { useState } from 'react'
import './page.css'
import { Input } from '@/components/input'
import { Age } from '@/components/age'
import { Button } from '@/components/button'
import { AddIcon } from '@/components/addicon'
import { Text } from '@/components/text'

export default function Home() {

const [age, setAge] = useState({year: 0, month: 0, day: 0});
const [inputValue, setInputValue] = useState({year: 0, month: 0, day: 0});
const [inputEnabled, setInputEnabled] = useState(false);

const hasValue = inputValue.day > 0 && inputValue.month > 0 && inputValue.year > 0;

const handleClick = () => { 
  if(hasValue){
  const currentDate = new Date();
  const pastDate = new Date(inputValue.year, inputValue.month - 1, inputValue.day);
  const diff = Math.floor(currentDate.getTime() - pastDate.getTime());
  const numberOfday = 1000 * 60 * 60 * 24;
  const numberOfdays = Math.round(diff / numberOfday);
  const numberOfmonths = Math.round(numberOfdays / 31);
  const numberOfyears = Math.round(numberOfmonths / 12);

  const ageCalculator = {
    day: numberOfdays,
    month: numberOfmonths,
    year: numberOfyears
  }
  
    setAge(ageCalculator);
    setInputValue({year: 0, month: 0, day: 0});
    setInputEnabled(false);
    console.log(ageCalculator);
  }
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = Number(event.target.value);
  const { name } = event.target;

  if(isNaN(value) || value < 0) {
    setInputEnabled(true);
    return;
  }

  setInputValue({ ...inputValue, [name]: value });
};

  return (
    <div className='main'>
      <div className='container'>
        <div className='inputStyles'>
            <div>
              <Text name={"day"}>Day</Text> 
              <Input 
              style={inputEnabled ? {border: "1px solid red"} : {border: "1px solid grey"}} 
              name={"day"} 
              placeholder='DD'
              onChange={handleChange} 
              />
              <Text 
              style={inputEnabled ? {color: "red"} : {display: "none"}} 
              > 
              Ivalid input! 
              </Text>
            </div>
            <div>
              <Text name={"month"}>Month</Text>
              <Input 
              style={inputEnabled ? {border: "1px solid red"} : {border: "1px solid grey"}} 
              name={"month"} 
              placeholder='MM' 
              onChange={handleChange}/>
              <Text 
              style={inputEnabled ? {color: "red"} : {display: "none"}} 
              > 
              Ivalid input! 
              </Text>
            </div>
            <div>
              <Text name={"year"}>Year</Text>
              <Input 
              style={inputEnabled ? {border: "1px solid red"} : {border: "1px solid grey"}} 
              name={"year"} 
              placeholder='YYYY'
              onChange={handleChange}
              />
              <Text 
              style={inputEnabled ? {color: "red"} : {display: "none"}} 
              > 
              Ivalid input! 
              </Text>
            </div>
        </div>
        <div className="outputAge">
        <div className='addButton' >
        <div className='line'>
          <Button onClick={handleClick}>
            <AddIcon/>
          </Button>
          </div>
        </div>
            <Age number={age.year} data={"years"}/>
            <Age number={age.month} data={"months"}/>
            <Age number={age.day} data={"days"}/>
        </div>
      </div>
    </div>
  )
}

