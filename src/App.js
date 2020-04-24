import React, {useState, useEffect} from "react";
import  * as yup  from 'yup';
import Form from './components/Form.js';
import HeaderNav from './components/HeaderNav';
import HomePage from './components/homePage';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';



const initFormValue = {
  name:'',
  size:'',
  toppings:{
    pepperoni:false,
    cheese:false,
    pineapples:false,
    onions:false,},
  special:''
}
const initFormErrors = {
  name:'',
  size:'',
  pepperoni:'',
  cheese:'',
  pineapples:'',
  onions:'',
  // specialInstructions:''
}
const formSchema= yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name Field Must Contain at Least Two Characters')
    .required('Name Field is Required'),
  size: yup
    .string()
    .required('Please Select A Size'),
  special: yup
    .string()
  // toppings:
})

const App = () => {
  const [formValue, setFormValue] = useState(initFormValue)
  const [formErrors, setFormErrors] = useState(initFormErrors)
  const [isDisabled, setIsDisabled] = useState(true)
  const [order, setOrder]=useState([])
  
  const onSubmit = event => {
    event.preventDefault()

    const newPizza = {
      name: formValue.name,
      size: formValue.size,
      toppings: Object.keys(formValue.toppings)
        .filter(topping => formValue.toppings[topping] === true)
    }
   console.log(newPizza)
    setFormValue(initFormValue)
  }

  const onChecked = (event)=>{
    const {name} = event.target
    const isChecked = event.target.checked

    setFormValue({
      ...formValue,
      toppings: {
        ...formValue.toppings,
        [name]: isChecked
      }

    })
  }

  const onInputChange = (event)=>{
    const name = event.target.name
    const value = event.target.value


    yup.reach(formSchema, name).validate(value)
    .then((valid)=>{
      setFormErrors({
        ...formErrors,
        [name]:''
      })
    })
    .catch(err=>{
      
      setFormErrors({
        ...formErrors,

        [name]: err.errors[0]
      })
    })

    setFormValue({
      ...formValue,
      [name]:value
    })

  }

  useEffect(()=>{

    formSchema.isValid(formValue)
      .then(valid=>{
        setIsDisabled(!valid)
      })

  },[formValue])

console.log()


  return (
    <Switch>
      <div>
        <HeaderNav/>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route exact path='/pizza'>
          <Form
            disabled={isDisabled}
            value={formValue}
            errors={formErrors}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            onChecked={onChecked}
            />
        </Route>
      </div>
    </Switch>
  );
};
export default App;
