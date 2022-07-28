import React from "react"

const Form = () => {
  return (
    <form className="form">
      <div className="form__group">
        <label htmlFor="name" name="name">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Please Enter your name here"
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="email" name="email">
          Email:
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Please Enter your email here"
          required
        />
      </div>
    </form>
  )
}

export default Form
