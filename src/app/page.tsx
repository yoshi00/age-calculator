'use client'
import { useState, ChangeEvent, KeyboardEvent } from 'react'
import './page.css'
import { Input, Button, AddIcon, Text, Card } from '@/components'
import { differenceInYears, differenceInMonths, differenceInDays, isLeapYear } from 'date-fns'

export default function Home() {
  const [age, setAge] = useState({ year: 0, month: 0, day: 0 })
  const [inputValue, setInputValue] = useState({ year: 0, month: 0, day: 0 })
  const [inputEnabled, setInputEnabled] = useState<boolean>(false)
  const calculateAge = () => {
    const currentDate = new Date()
    const isValidYear = inputValue.year > 0 && inputValue.year <= currentDate.getFullYear()
    const isValidMonth = inputValue.month >= 1 && inputValue.month <= 12
    const maxDay = [31, isLeapYear(inputValue.year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
      inputValue.month - 1
    ]
    const isValidDay = inputValue.day >= 1 && inputValue.day <= maxDay

    if (isValidYear && isValidMonth && isValidDay) {
      const pastDate = new Date(inputValue.year, inputValue.month - 1, inputValue.day)

      const ageCalculator = {
        day: differenceInDays(currentDate, pastDate),
        month: differenceInMonths(currentDate, pastDate),
        year: differenceInYears(currentDate, pastDate),
      }

      setAge(ageCalculator)
      setInputEnabled(false)
    } else {
      setInputEnabled(true)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: parseInt(event.target.value),
    })
  }
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const validCharacters = '0123456789'
    if (!validCharacters.includes(event.key) && event.ctrlKey) {
      event.preventDefault()
    }
  }

  return (
    <div className="main">
      <div className="container">
        <section className="input-container">
          <div>
            <Text style={{ color: '222222' }}>Day</Text>
            <Input
              style={inputEnabled ? { outlineStyle: 'none' } : { outlineColor: '#B4B6CB' }}
              text="day"
              placeholder="DD"
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <Text style={inputEnabled ? { color: 'red', fontSize: 9, alignItems: 'center' } : { display: 'none' }}>
              Wrong valid date!
            </Text>
          </div>

          <div>
            <Text style={{ color: '222222' }}>Month</Text>
            <Input
              style={inputEnabled ? { outlineStyle: 'none' } : { outlineColor: '#B4B6CB' }}
              text="month"
              placeholder="MM"
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <Text style={inputEnabled ? { color: 'red', fontSize: 9, alignItems: 'center' } : { display: 'none' }}>
              Wrong valid date!
            </Text>
          </div>
          <div>
            <Text style={{ color: '222222' }}>Year</Text>
            <Input
              style={inputEnabled ? { outlineStyle: 'none' } : { outlineColor: '#B4B6CB' }}
              text="year"
              placeholder="YYYY"
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <Text style={inputEnabled ? { color: 'red', fontSize: 9, alignItems: 'center' } : { display: 'none' }}>
              Wrong valid date!
            </Text>
          </div>
        </section>

        <div className="add-button">
          <Button onClick={calculateAge}>
            <AddIcon />
          </Button>
        </div>
        <div className="display-age">
          <Card
            style={{ color: '222222', fontFamily: 'Poppins', fontWeight: 800, fontSize: 38, fontStyle: 'italic' }}
            age={age.year}
            date="years"
          />
          <Card
            style={{ color: '222222', fontFamily: 'Poppins', fontWeight: 800, fontSize: 38, fontStyle: 'italic' }}
            age={age.month}
            date="months"
          />
          <Card
            style={{ color: '222222', fontFamily: 'Poppins', fontWeight: 800, fontSize: 38, fontStyle: 'italic' }}
            age={age.day}
            date="days"
          />
        </div>
      </div>
    </div>
  )
}
