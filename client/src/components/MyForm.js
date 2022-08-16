import React from 'react'

const MyForm = (props) => {

  const {state,setState,error,setError}=props

  const handleChange = (e) => {

    if(e.target.name == 'name'){
      if((e.target.value).trim().length < 2){
        setState({...state,name:{value:e.target.value,error:'Name must be 2 characters long'}})
        setError(true)
      } else {
        setState({...state,name:{value:e.target.value,error:null}})
        setError(false)
      }
    }
    if(e.target.name == 'email'){
      if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)){
        setState({...state,email:{value:e.target.value,error:'Must be a valid email'}})
        setError(true)
      } else {
        setState({...state,email:{value:e.target.value,error:null}})
        setError(false)
      }
    }
    if(e.target.name == 'password'){
      if((e.target.value).trim().length < 8){
        setState({...state,password:{value:e.target.value,error:'Password must be 8 characters long'}})
        setError(true)
      } else {
        setState({...state,password:{value:e.target.value,error:null}})
        setError(false)
      }
    }
    if(e.target.name == 'confirmPassword'){
      if((e.target.value) != state.password.value){
        setState({...state,confirmPassword:{value:e.target.value,error:'Passwords must match'}})
        setError(true)
      } else {
        setState({...state,confirmPassword:{value:e.target.value,error:null}})
        setError(false)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting')
    if(state.name.value === "" || state.email.value === "" || state.confirmPassword === "") {
      console.log('submit invalid')
      return
    }
    if(error) {
      console.log('submit invalid')
      return
    } else {
      setState({...state,submitted:true})
      console.log('submit valid')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name (required):</label>
        <input type='text' id='name' name='name' onChange={handleChange}></input>
        <p>{state.name.error? state.name.error : null}</p>

        <label htmlFor='email' name='email'>Email (required):</label>
        <input type='text' id='email'  name='email' onChange={handleChange}></input>
        <p>{state.email.error? state.email.error : null}</p>

        <label htmlFor='password'>Password (required):</label>
        <input type='password' id="password" name='password' onChange={handleChange}></input>
        <p>{state.password.error? state.password.error : null}</p>
        
        <button>Submit</button>
    </form>
  )
}

export default MyForm