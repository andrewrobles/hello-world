import Image from 'next/image'
import { useState } from 'react'

export default function Index() {
  const [state, setState] = useState({
    index: -1
  })

  const setIndex = (index) => {
    setState({
      index: index
    })
  }

  const tutors = [
    {
      id: 1,
      name: "Andrew R.",
      image: "andrew-robles.jpg",
      headline: "Enthusiastic Python Programming Tutor",
      bio: "Hello world! My name is Andrew and I'm a software engineer by day, Python programming tutor by night. Would YOU like to gain the skills needed to succeed in computer science? If you choose me as a tutor you will learn what it takes to become a great programmer. Whether you are a student who needs help with your coding assignments or someone who wants to learn Python from scratch, I am confident that I can help you reach your goals!\n\nI have both academic and industry experience with the Python programming language. My academic training comes from UC Berkeley, the #1 ranked public school in the world. The reason why I specialize in Python is that it’s fun to learn and extremely relevant in today's world of technology!\n\nI'm very friendly and love to help new and aspiring programmers. So if you think that we might be a good fit, please reach out!",
    },
    {
      id: 2,
      name: "Matthew D.",
      image: "matthew-dawidowicz.jpg",
      headline: "Knowledgeable Python Programming Tutor",
      bio: "Hello, I am Matthew (you can call me Matt). I truly love data and revealing to people what it can show. I am always focused first on providing the most comprehensive, polished explanations possible in a clear and concise manner, because students always deserve true honesty and quality from whomever they hire.\n\nI'm a data scientist by trade (MS in Data Science from Columbia University's Fu Foundation School of Engineering and Applied Science) with specialties in Data Visualization, Machine Learning, Natural Language Processing, and Data Mining. I previously worked in financial compliance and healthcare technology, but I am here to work with anything data-related, particularly to its presentation.\n\nAre you struggling with Python in your computer science course? Whether you are struggling with finishing a difficult assignment or understanding computer science concepts, I am confident that I can help you pass your class with flying colors. So don't hesitate to reach out! You will be glad you did."
    }
  ]

  if (state.index == -1) {
    return <Home tutors={tutors} setIndex={setIndex}/>
  } else {
    return <Calendar />
  }
}

function Calendar(props) {
  return <p>Hello</p>
}

function Home(props) {
  return (
    <div>
      <Image src="/logo.png" alt="Hello World School Logo" width={50} height={50} />
      <div>Questions? Email us at andrew@helloworld.school</div>
      {props.tutors.map(tutor => <Tutor tutor={tutor} setIndex={props.setIndex}/>)}
    </div>
  )
}

function Tutor(props) {
  const onClick = ()=> {
    props.setIndex(props.id)
  }
  return (
    <div>
      <Image src={"/" + props.tutor.image}  alt="Hello World School Logo" width={50} height={50} />
      <div>{props.tutor.name}</div>
      <div>{props.tutor.headline}</div>
      <div>{props.tutor.bio}</div>
      <button onClick={onClick}>Meet with me</button>
    </div>
  )
}


