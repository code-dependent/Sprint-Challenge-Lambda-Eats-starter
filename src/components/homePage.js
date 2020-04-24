import React, {useState, useEffect} from "react";


const HomePage =()=>{


    return(
        <main style={{
            display:'flex',
            flexDirection:'column',
            marginTop:'5%',
            marginLeft:'auto',
            marginRight:'auto',
            width:'85%',
            alignContent:'center'
        }}>
            <h2>Food Near You</h2>


            <section style={{
            display:'flex',
            justifyContent:'space-between'
        }} >
                <div style={{
                    
                    display:'flex',
                    justifyContent:'center'
                }}>
                    
                    <img style={{width:'70%'}} src={ require("./burrito.jpg")}></img>


                </div>
                <div style={{
                    
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <img style={{width:'70%'}} src={ require("./burrito.jpg")}></img>
                </div>
                <div style={{
                    
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <img style={{width:'70%'}} src={ require("./burrito.jpg")}></img>
                </div>
            </section>
            <section style={{
            display:'flex',
            justifyContent:'space-between',
            marginTop:'5%'
        }} >
                <div style={{
                    
                    display:'flex',
                    justifyContent:'center'
                }}>
                    
                    <img style={{width:'70%'}} src={ require("./burrito.jpg")}></img>


                </div>
                <div style={{
                    
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <img style={{width:'70%'}} src={ require("./burrito.jpg")}></img>
                </div>
                <div style={{
                    
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <img style={{width:'70%'}} src={ require("./burrito.jpg")}></img>
                </div>
            </section>
        </main>
    )
}

export default HomePage