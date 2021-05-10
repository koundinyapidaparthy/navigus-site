import React from 'react'
import styled from "styled-components";

const Teacher = () => {
    const Blocking=(data)=>{
        alert("You are a student You Cannot use this Page");
    }
    const UnBlocking=(data)=>{
        alert(data.message);
        // document.querySelector(".Already").style.display="block";
        document.querySelector(".MakeAQuiz").style.display="block";
        // document.querySelector(".StudentsScores").style.display="block";
        document.querySelector(".div1").style.display="none";
    }
    const checkingData=async()=>{
        
        try {
            const logindata=document.querySelector(".uniqID").value.trim();
            const res = await fetch('/Teacher', {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    logindata
                })
            });

            const data = await res.json();
            if(data.status===201){
                if(data.userprofession==="Teacher"){
                    UnBlocking(data);
                }
                else{
                    Blocking(data);
                }
            }
            else{
                alert("Please enter Correct uniqID");
            }

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <TEACHER>
            {/* <a href="/QuizsAlreadyUploaded"className="Already">Quizs-Already-Uploaded</a> */}
            <a href="/MakeAQuiz" className="MakeAQuiz">Make-A-Quiz</a>
            {/* <a href="/StudentsScores" className="StudentsScores" >Students-Scores</a> */}
            <div className="div1">
                <div className="login">Enter Your Details to proceed furture</div>
                <div>Enter The Unique ID<input type="number" className="uniqID" /></div>
                <button onClick={checkingData}>Login</button>
            </div>
        </TEACHER>
    )
}


const theme={
    flex: (fd,jc,ai )=>`display :flex;flex-direction :${fd};justify-content :${jc};align-items :${ai};`
}

const TEACHER=styled.div`
    width:100%;
    min-height:100vh;
    background-color:#99ff99;
    .div1{
        width:320px;
        height:40vh;
        font-size:14px;
        border-radius:1rem;
        box-shadow:0 0 30px -10px black;
        background-color:white;
        ${theme.flex("column","space-evenly","center")};
        padding: 8px 16px;
        div{
        ${theme.flex("column","space-evenly","center")};
            width:100%;
            input{
                padding:10px;
            }
        }
        button{
                color:white;
                background-color: #343A40;
                padding: 4px 8px;
                border:0px;
                 cursor: pointer;
                letter-spacing:2px;
                font-weight:bold;
                text-transform: uppercase;
                &:hover{
                background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
                animation:slidebg 5s linear infinite;
            }
            @keyframes slidebg {
                    to {
                        background-position:20vw;
                    }
                    }
        }
    }
    ${theme.flex("row","space-around","center")};
        a{
            display:none;
            font-size:20px;
            border:0px;
            color:black;
            text-decoration:none;
            background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
            padding:100px;
            border-radius:10px;
            font-weight:bold;
            box-shadow:0 0 30px -10px black;
            transition: all 1s ease-in-out;
            &:hover{
                padding:105px;
                box-shadow:0 0 60px -40px black;

            }
        }
        @media only screen and (max-width:1240px){
                a{
                    font-size:18px;
                    padding:90px 50px;
                    &:hover{
                        padding:95px 55px;
                    }
                }
        }
        @media only screen and (max-width:890px){
            ${theme.flex("column","space-around","center")};
                a{
                    font-size:15px;
                    padding:70px 50px;
                    &:hover{
                        padding:75px 60px;
                    }
                }
        }
        

`;

export default Teacher
