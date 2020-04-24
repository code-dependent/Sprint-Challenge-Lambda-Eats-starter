import React,{useState, UseEffect} from 'react';


const Form = (props)=>{

    const {
        value,
        onInputChange,
        onSubmit,
        onChecked,
        disabled,

    } = props


    return(
        <form>
            <label>Name:
                <input
                    type='text'
                    name='name'
                    value={value.name}
                    onChange={onInputChange}/>
            </label>
            <label>Size:
                <select
                    type='text'
                    name='size'
                    value={value.size}
                    onChange={props.onInputChange}>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='xlarge'>Extra Large</option>
                </select>
            </label>
            <label>Toppings:</label>
            <label>
                <input
                    type='checkbox'
                    name='pepperoni'
                    value={value.toppings.pepperoni}
                    onChange={onChecked}/>Pepperoni
            </label>
            <label>
                <input
                    type='checkbox'
                    name='cheese'
                    value={value.toppings.cheese}
                    onChange={onChecked}/>Cheese
            </label>
            <label>
                <input
                    type='checkbox'
                    name='pineapple'
                    value={value.toppings.pineapple}
                    onChange={onChecked}/>Pineapple
            </label>
            <label>
                <input
                    type='checkbox'
                    name='onion'
                    value={value.toppings.onion}
                    onChange={onChecked}/>Onions
            </label>
            <label> Special Instructions
                <input
                    type='text'
                    name='special'
                    value={value.toppings.special}
                    onChange={onInputChange}/>
                    
            </label>
            <button onClick={onSubmit} disabled={disabled}>Add to Cart</button>
        </form>
    )
}

export default Form