'use client'
import { useState } from 'react'
import './page.css'
import { Input, Button, AddIcon, Text, Card } from '@/components'
import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns'

export default function Home() {
  const [age, setAge] = useState<{ year: number | null; month: number | null; day: number | null }>({
    year: null,
    month: null,
    day: null,
  })
  const [inputValue, setInputValue] = useState({ year: 0, month: 0, day: 0 })
  const [inputEnabled, setInputEnabled] = useState<boolean>(false)

  const calculateAge = () => {
    const currentDate = new Date()
    const pastDate = new Date(inputValue.year, inputValue.month - 1, inputValue.day)

    const ageCalculator = {
      day: differenceInDays(currentDate, pastDate),
      month: differenceInMonths(currentDate, pastDate),
      year: differenceInYears(currentDate, pastDate),
    }

    setAge(ageCalculator)
    setInputEnabled(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    const { name } = event.target

    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }))

    const day = name === 'day' ? value : inputValue.day
    const month = name === 'month' ? value : inputValue.month
    const year = name === 'year' ? value : inputValue.year

    if ((name === 'day' || name === 'month' || name === 'year') && isNaN(value)) {
      setInputEnabled(true)
      return
    }

    if (name === 'day' && (day < 1 || day > 31)) {
      setInputEnabled(true)
      return
    }

    if (name === 'month' && (month < 1 || month > 12)) {
      setInputEnabled(true)
      return
    }

    const currentYear = new Date().getFullYear()
    if (name === 'year' && year > currentYear) {
      setInputEnabled(true)
      return
    }
    setInputEnabled(false)
  }

  return (
    <div className="main">
      <div className="container">
        <section className="input-container">
          <div>
            <Text style={{ color: '222222' }}>Day</Text>
            <Input
              style={inputEnabled ? { outlineStyle: 'none' } : { outlineColor: '#B4B6CB' }}
              name={'day'}
              placeholder="DD"
              onChange={handleChange}
            />
            <Text style={inputEnabled ? { color: 'red', fontSize: 9, alignItems: 'center' } : { display: 'none' }}>
              Must be a valid date!
            </Text>
          </div>
          <div>
            <Text style={{ color: '222222' }}>Month</Text>
            <Input
              style={inputEnabled ? { outlineStyle: 'none' } : { outlineColor: '#B4B6CB' }}
              name={'month'}
              placeholder="MM"
              onChange={handleChange}
            />
            <Text style={inputEnabled ? { color: 'red', fontSize: 9, alignItems: 'center' } : { display: 'none' }}>
              Must be a valid date!
            </Text>
          </div>
          <div>
            <Text style={{ color: '222222' }}>Year</Text>
            <Input
              style={inputEnabled ? { outlineStyle: 'none' } : { outlineColor: '#B4B6CB' }}
              name={'year'}
              placeholder="YYYY"
              onChange={handleChange}
            />
            <Text style={inputEnabled ? { color: 'red', fontSize: 9, alignItems: 'center' } : { display: 'none' }}>
              Must be a valid date!
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
