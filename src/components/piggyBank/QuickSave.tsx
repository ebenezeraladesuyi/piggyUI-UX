import React from 'react';
import styled from 'styled-components';



const QuickSave = () => {
  return (
    <div>

        <Body>

            {/* <Black></Black> */}

            <div></div>

            <Quick>

                <Top>

                    <Save>Quick Save</Save>
                    <Enter>Enter an amount and a destination</Enter>

                    <Tap>
                        <Label>Tap here and enter .. (e.g 5000)</Label>

                        <Here type="" placeholder='Tap here and enter .. (e.g 5000)'/>
                    </Tap>

                    <Label>Choose a Destination
                    </Label>

                        <Select name="" id="">
                        <option value="">Click To Select</option>
                        <option value="">Piggybank</option>
                        <option value="">Safelock</option>
                        <option value="">Target</option>
                        <option value="">Flex Naira</option>
                        </Select>

                </Top>

                <Proceed>Proceed</Proceed>

            </Quick>

        </Body>

    </div>
  )
}

export default QuickSave;

// const Body = styled.div``;

const Select = styled.select`
width: 100%;
height: 47px;
border-radius: 7px 7px 7px 0;
padding-left: 10px;
`;

const Proceed = styled.button`
width: 100%;
height: 40px;
color: white;
background-color: #0d60d8;
margin-bottom: 30px;
border: none;
border-radius: 7px 7px 7px 0;
font-weight: 700;
`;

const Here = styled.input`
width: 96%;
height: 42px;
border-radius: 7px 7px 7px 0;
padding-left: 10px;
`;

const Label = styled.div`
margin-top: 30px;
margin-bottom: 7px;
font-size: 12px;
font-weight: 700;
color: gray;
`;

const Tap = styled.div`
/* display: flex;
flex-direction: column; */
`;

const Enter = styled.div`
font-size: 12px;
color: gray;
margin-bottom: 40px;
`;

const Save = styled.div`
color: #0d60d8;
font-size: 23px;
font-weight: 700;
`;

const Top = styled.div`
margin-top: 60px;
width: 100%;
`;

const Quick = styled.div`
width: 320px;
height: 100%;
padding-left: 20px;
padding-right: 20px;
background-color: white;
z-index: 100;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Black = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
bottom: 0;
right: 0;
left: 0;
background-color: #0000005b;
`;

const Body = styled.div`
width: 100;
height: 100vh;
position: relative;
display: flex;
justify-content: space-between;
background-color: #00000069;
`;



