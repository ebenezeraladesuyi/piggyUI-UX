import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <>

        <Head>

            <Contain>

            <Logo>LOGO</Logo>

            <Navs>
                <Nav>Save</Nav>
                <Nav>Invest</Nav>
                <Nav>Stories</Nav>
                <Nav>FAQs</Nav>
                <Nav>Blog</Nav>
                <Nav>E-book</Nav>
            </Navs>

            <Buttons>
                <Link to="/signin">
                  <Signin>Sign in</Signin>
                </Link>

                <Link to="signup">
                  <Signout>Create free account</Signout>
                  </Link>
            </Buttons>

            </Contain>

        </Head>

    </>
  )
}

export default Header;

// const Head = styled.div``;

// const Head = styled.div``;

const Signout = styled.button`
width: 150px;
height: 40px;
border: none;
background: #0c1825;
color: white;
border-radius: 6px;
cursor: pointer;
font-weight: 600;

:hover{
  background: #26b2e0;
}
`;

const Signin = styled.button`
width: 80px;
height: 40px;
border: 1px solid #0c1825;
background: transparent;
color: #0c1825;
border-radius: 6px;
margin-right: 15px;
cursor: pointer;
font-weight: 600;

:hover{
  color: #26b2e0;
  border: 1px solid #26b2e0;
}
`;

const Buttons = styled.div`
display: flex;
`;

const Nav = styled.div`
color: #0c1825;
font-size: 15px;
margin-right: 30px;
font-weight: 500;
`;

const Navs = styled.h4`
display: flex;
`;

const Logo = styled.div`
color: #0c1825;
font-size: 27px;
font-weight: 700;
`;

const Contain = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;


const Head = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
position: fixed;
z-index: 100;
`;

