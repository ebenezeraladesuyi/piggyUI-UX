import React from 'react';
import styled from "styled-components";

const Signin = () => {
  return (

      
    <Sign>

    <Logo>LOGO</Logo>

    <Contain>

        <Secure>Login to your account</Secure>

        <Future>securely login to your account.</Future>

        <Label htmlFor="">Email
            <Full type="text" placeholder="" required />
        </Label>

        <Label htmlFor="">Password
            <Full type="text" placeholder="" required />
        </Label>

        <Create>LOG IN</Create>

    </Contain>

    <Have>Don't have an account? Register</Have>

    <Have2>Forgot Password</Have2>


</Sign>


    
  )
}

export default Signin;


const Have2 = styled.div`
color: white;
font-weight: 700;
font-size: 13px;
margin-top: 21px;
cursor: pointer;
/* margin-bottom: 40px; */

:hover{
    color: #9a9898;
}
`;

const Have = styled.div`
color: white;
font-weight: 700;
font-size: 13px;
margin-top: 40px;
cursor: pointer;
/* margin-bottom: 40px; */

:hover{
    color: #9a9898;
}
`;

const Create = styled.button`
width: 78%;
border: none;
height: 45px;
margin-top: 10px;
background-color: #0d60d8;
color: white;
border-radius: 7px 7px 7px 0;
font-weight: 700;
`;

const Full = styled.input`
width: 95%;
height: 40px;
margin-top: 10px;
border-radius: 5px;
background-color: #edf2f7;
border: none;
padding-left: 10px;
padding-top: 5px;
padding-bottom: 5px;
outline: none;
`;

const Label = styled.label`
display: flex;
flex-direction: column;
width: 80%;
justify-content: center;
align-self: center;
font-size: 13px;
font-weight: 600;
margin-bottom: 20px;
color: #0c1825;
`;

const Future = styled.div`
font-size: 13px;
font-weight: 500;
text-align: center;
color: #062863;
margin-bottom: 30px;
`;

const Secure = styled.div`
font-size: 22px;
font-weight: 700;
text-align: center;
margin-top: 40px;
color: #0d60d8;
margin-bottom: px;
`;

const Logo = styled.div`
font-size: 35px;
font-weight: 700;
color: white;
margin-top: 25px;
margin-bottom: 25px;
`;

const Contain = styled.div`
width: 400px;
height: 420px;
border-radius: 15px 15px 15px 0;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
`;

const Sign = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #062863;
/* padding-bottom: 60px; */
`;
