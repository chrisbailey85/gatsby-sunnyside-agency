import React, { useState } from "react"
import { form__btn } from "../assets/css/form.module.css"
const Form = () => {
  const [formInfo, updateFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    updateFormInfo(prevInfo => {
      return {
        ...prevInfo,
        [name]: value,
      }
    })
  }
  function handleClick(e) {
    e.preventDefault()
  }
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          value={formInfo.name}
          type="text"
          placeholder="Please enter your name here"
          id="name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={formInfo.email}
          type="text"
          name="email"
          id="email"
          placeholder="Please Enter your email here"
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          onChange={handleChange}
          value={formInfo.message}
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button type="submit" onClick={handleClick} className={form__btn}>
        submit
      </button>
    </form>
  )
}

export default Form
