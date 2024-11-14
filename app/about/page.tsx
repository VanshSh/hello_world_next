'use client'

const randomInteger = (count: number) => Math.round(Math.random() * count)
const About = () => {
  if (randomInteger(3) === 1) {
    throw new Error('Random number is 1')
  }
  return <div>About page</div>
}

export default About
