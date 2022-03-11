import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ConfirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>

        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } value = {firstname} />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value = {lastname}/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value = {email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value = {password}/>
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value = {ConfirmPassword} />
            </div>
            <input type="submit" value="Create User" />
        </form>
        
        <h2>First Name: {firstname}</h2>
        <h2>Last Name: {lastname}</h2>
        <h2>Email: {email}</h2>
        <h2>Password: {password}</h2>
        <h2>Confirm Password: {ConfirmPassword}</h2>
        </div>
    );
};
    
export default UserForm;
