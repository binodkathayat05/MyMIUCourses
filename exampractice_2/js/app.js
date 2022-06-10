/*
*census js
*/
"use strict";
window.onload=function(){
const censusForm= document.getElementById("censusForm");
// censusForm.addEventListener("submit",function(event){

// });

censusForm.addEventListener("submit",event =>{
event.preventDefault();
const fullName=document.getElementById("fullName");
const citizenId=document.getElementById("citizenId");
const socialSecurityNo=document.getElementById("socialSecurityNo");
const state=document.getElementById("state");
const snrCitezen=censusForm.elements["radBtnSnrCitizen"];


const formData=
`Full Name: ${fullName.value}
Citizen ID: ${citizenId.value}
Social sec No:${socialSecurityNo.value}
State:${state.value}
Is a Senior Citizen:${snrCitezen.value}`;
alert(formData);
fullName.value="";
citizenId.value="";
socialSecurityNo.value="";
state.value="";
})
}

 
