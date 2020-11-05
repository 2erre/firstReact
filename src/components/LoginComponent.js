import React  from 'react'
import { Loginpage } from '../pages/Loginpage';
import './HelloComponent.css'
 
export const LoginComponent = ({state,loginUtente,onChange}) => {
    return (

<>
<div class="container">
<div class="form-group">
        <label for="formGroupExampleInput" >Username:</label>
        <input  class="form-control" 
        type="text"
        name="username"
        value={state?.username}  
        onChange={(e)=>onChange(e)}
        
        />
</div>
<div class="form-group">
        <label for="formGroupExampleInput" >Password:</label>
        <input class="form-control"
        type="text"
        name="password"
        value={state?.password}
        onChange={(e)=>onChange(e)}  
        />
</div>
        <button class="btn btn-dark" onClick={()=>loginUtente()}>Login</button> 
</div> 
</>


        
    );
}