import React from 'react'
import styled from "styled-components"
const Quiz = (props) => {
    return (
        <DIV>
            <div className="question">Q{props.q1} <input type="text" className={"class"+props.q1 }placeholder={"Enter the question"+props.q1+" here" }required /></div>
            <div>A.<input type="text" className={"class"+props.q1+props.q2 } placeholder={"Enter the option" +props.q2+" here"} required /></div>
            <div>B.<input type="text" className={"class"+props.q1+(props.q2+1) } placeholder={"Enter the option" +(props.q2+1)+" here"} required/></div>
            <div>C.<input type="text" className={"class"+props.q1+(props.q2+2) } placeholder={"Enter the option" +(props.q2+2)+" here"} required/></div>
            <div>D.<input type="text" className={"class"+props.q1+(props.q2+3) } placeholder={"Enter the option" +(props.q2+3)+" here"} required/></div>
            <div>Correct Option 
                <select className={"class"+props.q1+(props.q2+4) } required>
                    <option value="none" hidden >
                        Select an Option
                    </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </div>
        </DIV>
    )
};
const theme={
    flex: (fd,jc,ai )=>`display :flex;flex-direction :${fd};justify-content :${jc};align-items :${ai};`
}
const DIV=styled.div`
    margin-top:20px;
    ${theme.flex("column","space-around","center")};
    height:300px;
    div{
        width:100%;
        ${theme.flex("row","space-around","center")};
        input{
            width:70%;
            padding-left:10px;
            border-color:rgba(0,0,0,0.3);
            height:30px;
            border-radius:5px;
        }
        select{
            border-color:rgba(0,0,0,0.3);

        }
    }
`;

export default Quiz
