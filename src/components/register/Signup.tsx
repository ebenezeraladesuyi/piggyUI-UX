import React from "react";
import styled from "styled-components";



const SignUp = () => {


    return (

        <>

            <Sign>

                <Logo>LOGO</Logo>

                <Contain>

                    <Secure>Create a Secure Account</Secure>

                    <Future>Welcome to the future of Savings and Investments</Future>

                    <Label htmlFor="">Full Name
                        <Full type="text" placeholder="Full Name" required />
                    </Label>

                    <Label htmlFor="">Email
                        <Full type="text" placeholder="Email" required />
                    </Label>

                    <Label htmlFor="">Phone Num
                        <Full type="number" placeholder="Phone Num" required />
                    </Label>

                    <Label htmlFor="">Password
                        <Full type="password" placeholder="Password" required />
                    </Label>

                    <Label htmlFor="">Referral Code (Optional)
                        <Full type="text" placeholder="Referral Code" />
                    </Label>

                    <Label htmlFor="">How Did You Hear About Us? (Optional)

                    <Select name="" id="">
                    <option value="">Click To Select</option>
                    <option value="">Facebook</option>
                    <option value="">Twitter</option>
                    <option value="">LinkedIn</option>
                    <option value="">Freinds/Family</option>
                    </Select>

                    </Label>

                    <Create>CREATE ACCOUNT</Create>

                </Contain>

                <Have>Already have an account? Log in</Have>

            </Sign>

        </>
    )
}

export default SignUp;

// const Sign = styled.div``;

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

const Select = styled.select`
width: 98%;
height: 55px;
margin-top: 10px;
border-radius: 5px;
background-color: #edf2f7;
border: none;
padding: 5px 0 5px 10px;
outline: none;
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
margin-top: 35px;
margin-bottom: 30px;
`;

const Contain = styled.div`
width: 400px;
height: 115vh;
border-radius: 15px 15px 15px 0;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
`;

const Sign = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #062863;
padding-bottom: 60px;
`;

