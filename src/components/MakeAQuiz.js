import React from 'react'
import styled from "styled-components"
import Quiz from "./Quiz";
import { useState } from 'react';
const MakeAQuiz = () => {
    const [arr1,arrlen1]=useState(1);
    const [ExamData,newVal1]=useState({
        SubjectName:"",
        QuizName:"",

    })
    const [arr2,arrlen2]=useState([]);
    const arr=[];
    var Array1=[];

    const NoofQ=(e)=>{
        e.preventDefault();

        const val1=document.querySelector("#subjectname");
        const val2=document.querySelector("#qiuzname");
        const val3=document.querySelector("#noofquestions");
        if(val1.value.trim()==="" || val2.value.trim()==="" || val3.value.trim()===""){
            e.preventDefault();
                if(val1.value.trim()===""){
                    val1.style.borderColor="red";
                    alert(`SubjectName is not entered`);
                }
                else{
                    val1.style.borderColor="rgba(0,0,0,0.3)";
                }

                 if(val2.value.trim()===""){
                    val2.style.borderColor="red";
                    alert("QuizName is not entered");
                }
                else{
                    val2.style.borderColor="rgba(0,0,0,0.3)";
                }
                 if(val3.value.trim()===""){
                    val3.style.borderColor="red";
                    alert("No of questions not entered");
                }
                if(val3.value<=0 || val3.value>=10){
                    val3.style.borderColor="red";
                    alert("No of questions are must between 1 and 10");
                }
                else{
                    val3.style.borderColor="rgba(0,0,0,0.3)";
                }
            }
        else{
            newVal1({
                SubjectName:val1.value.trim(),
                QuizName:val2.value.trim()
            });
           
            if(val3.value>10){
                for(var k=1;k<=10;k++){
                    arr[k-1]=k;
                }
                arrlen1(10);
                document.querySelector(".inner").style.display="none";
                document.querySelector("#idB").style.display="block";
                console.log(arr2);
                console.log(arr1);
                arrlen2(arr);
            }
            else{
                for(var L=1;L<=val3.value;L++){
                    arr[L-1]=L;
                }
                arrlen1(val3.value);
                document.querySelector(".inner").style.display="none";
                document.querySelector("#idB").style.display="block";
                console.log(arr2);
                console.log(arr1);
                arrlen2(arr);
            }
        }

    }
    const TeacherUpload=async()=>{
        const SubjectName=ExamData.SubjectName;
        const QuizName=ExamData.QuizName;
        console.log( SubjectName,QuizName,Array1);
        const res = await fetch("/TeacherUpload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                SubjectName,QuizName,Array1
            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert(data.error);
            console.log(data.error);
        } else if(data.status===201){
             window.alert(data.message);
             document.querySelector(".inner").style.display="flex";
                document.querySelector("#idB").style.display="none";
            }
    }
    const call=async(e)=>{
        e.preventDefault();
        try{
            for(var j=1;j<=arr1;j++){
                const object={
                        "question":"",
                        "option1":"",
                        "option2":"",
                        "option3":"",
                        "option4":"",
                        "correctOption":"",
                }
               const val1=document.querySelector(`.class${j}`);
               const val2=document.querySelector(`.class${j}1`);
               const val3=document.querySelector(`.class${j}2`);
               const val4=document.querySelector(`.class${j}3`);
               const val5=document.querySelector(`.class${j}4`);
               const val6=document.querySelector(`.class${j}5`);
                if(val1.value.trim()==="" || val2.value.trim()==="" || val3.value.trim()==="" || val4.value.trim()==="" || val5.value.trim()==="" || val6.value==="none"){
                    e.preventDefault();
                    if(val1.value.trim()===""){
                        val1.style.borderColor="red";
                        alert(`question ${j} is Not Entered`);
                        break
                    }
                    else{
                        val1.style.borderColor="rgba(0,0,0,0.3)";
                    }
    
                     if(val2.value.trim()===""){
                        val2.style.borderColor="red";
                        alert(`question ${j} option1 is Not Entered`);
                        break
                    }
                    else{
                        val2.style.borderColor="rgba(0,0,0,0.3)";
                    }
                     if(val3.value.trim()===""){
                        val3.style.borderColor="red";
                        alert(`question ${j} option2 is Not Entered`);
                        break
    
                    }
                    else{
                        val3.style.borderColor="rgba(0,0,0,0.3)";
                    }
                     if(val4.value.trim()===""){
                        val4.style.borderColor="red";
                        alert(`question ${j} option3 is Not Entered`);
                        break
    
                    }
                    else{
                        val4.style.borderColor="rgba(0,0,0,0.3)";
                    }
                     if(val5.value.trim()===""){
                        val5.style.borderColor="red";
                        alert(`question ${j} option4 is Not Entered`);
                        break
    
                    }
                    else{
                        val5.style.borderColor="rgba(0,0,0,0.3)";
                    }
                    if(val6.value==="none"){
                        val6.style.borderColor="red";
                        alert(`question ${j} Select correct option`);
                        break
    
                    }
                    else{
                        val6.style.border="1px solid black";
                    }
                }
                else{
                    object.question=val1.value.trim();
                    object.option1=val2.value.trim();
                    object.option2=val3.value.trim();
                    object.option3=val4.value.trim();
                    object.option4=val5.value.trim();
                    object.correctOption=val6.value.trim();
                    Array1[j-1]=object;
                    console.log(Array1);
                }
            }
            TeacherUpload();
        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <MAKEAQUIZ>
            
            <div className="div2">
                <div className="inner">
                        <div>Enter Subject Name: <input type="text" id="subjectname"  /></div>
                        <div>Enter Quiz Name: <input type="text" id="qiuzname" /></div>
                        <div>Number of Question You Want To Create In The Quiz: 
                            <input id="noofquestions" type="number" min="1" max="10" min-length="1" max-lenght="2" /></div>
                        <button onClick={NoofQ}>Prepare</button>
                </div>
                <form  id="idB" > 
                <div id="idA">You Can Create {arr1} Questions in this feilds</div>
                    {   
                        arr2.map((val,index,i)=>{
                            return <Quiz q1={val} q2={i[0]}  key={index} />
                        })
                    }
                <div id="button" ><button  onClick={call} >Upload</button></div>
                </form>
            </div>
        </MAKEAQUIZ>
    )
}
const theme={
    flex: (fd,jc,ai )=>`display :flex;flex-direction :${fd};justify-content :${jc};align-items :${ai};`
}

const MAKEAQUIZ =styled.div`

    width:100%;
    min-height:100vh;
    background-color:#99ff99;
    text-transform:capitalize;
    font-weight:bold;
    ${theme.flex("column","space-around","center")};


   .inner{
        ${theme.flex("column","center","center")};
        div{
            margin-bottom:20px;
            width:100%;
            ${theme.flex("row","center","center")};
        }
        button{
            border:0px;
                width:150px;
                height:40px;
                background-color: #343A40;
                border-radius: 4px;  
                color: #fff;
                cursor: pointer;
                letter-spacing:2px;
                font-weight:bold;
                text-transform: uppercase;
                padding: 8px 16px;
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
    .div2{

        background-color:white;
        width:35%;
        margin-top:3vh;

        height:90vh;
        border-radius:1rem;
        color:black;
        ${theme.flex("column","space-around","center")};

        #idA{
            width:100%;
            height:5vh;
            margin-top:10px;
            ${theme.flex("row","space-around","center")};

        }
        #idB{
            width:100%;
            height:80vh;
            overflow-y:scroll;   
            display:none;
        }
        #button{
            width:100%;
            height:10vh;
            ${theme.flex("row","space-around","center")};
            border:0px;
            button {
            border:0px;
                width:150px;
                height:40px;
                background-color: #343A40;
                border-radius: 4px;  
                color: #fff;
                cursor: pointer;
                letter-spacing:2px;
                font-weight:bold;
                text-transform: uppercase;
                padding: 8px 16px;
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
    }
    
`;

export default  MakeAQuiz