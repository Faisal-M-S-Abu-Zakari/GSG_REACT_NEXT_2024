import React from 'react'

const Form = () => {
    const handelSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <form className='form-style' onSubmit={handelSubmit}>
      <input type='text' placeholder='write you task' name='task'/>
      <div className='check-form'>
        <label htmlFor='check' >IS Urgent</label>
        <input type='checkbox' id='check'/>
      </div>
      <button>Add ToDo</button>
    </form>
  )
}

export default Form
