import { useState } from "react"
import "./App.css"

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [course, setCourse] = useState("")
  const [student, setStudent] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !phone.trim() || !course) {
      alert("Please fill in all fields")
      return
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email")
      return
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must contain exactly 10 digits")
      return
    }

    setStudent({
      name,
      email,
      phone,
      course
    })

    setName("")
    setEmail("")
    setPhone("")
    setCourse("")
  }

  return (
    <div className="container">

      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select a course</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="AI">AI</option>
        </select>

        <button type="submit">Register</button>

      </form>

      {student && (
        <div className="student-details">

          <h2>Student Details</h2>

          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>Course:</strong> {student.course}</p>

        </div>
      )}

    </div>
  )
}

export default App