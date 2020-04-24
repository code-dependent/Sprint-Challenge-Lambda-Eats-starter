import React from 'react';
import {Link} from 'react-router-dom'




const HeaderNav = (props)=>{

    const navStyle ={
        display:'flex',
        justifyContent:'space-between',
        alignItems:'baseline'

        
    }
    return(
        <header style={{
            display:'flex',
            flexDirection:'column',
            width:'85%',
            margin:'0 auto'
        }}>
            <nav style={navStyle}>
                <h1>Lambda Eats</h1>
                <div>
                <Link  to='/'>Home</Link>&nbsp;&nbsp;
                <Link to='/Pizza'>Build a Pie</Link>
                </div>
            </nav>
            <img style={{height:"50vh"}} src={ require("./Pizza.jpg")}></img>


        </header>
    )
}
export default HeaderNav