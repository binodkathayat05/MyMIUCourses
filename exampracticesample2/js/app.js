const d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("time").innerHTML = d;

"use strict";

var myLink = document.getElementById('helloclick');
myLink.onclick = clickmethod;

 function clickmethod () {
    const myForm = document.getElementById("myform");
    var patientIdNo = document.getElementById("patientIdNo");
    var firstName = document.getElementById("firstName");
    var middleName = document.getElementById("middleName");
    var lasttName = document.getElementById("lasttName");
    var dob = document.getElementById("dob");
    var department = document.getElementById("department");
    var radiosbt = myForm.elements["inlineRadioOptions"];
    const tabdata = document.getElementById("insertvalue");
    if (patientIdNo.value != '' && firstName.value != "" && lasttName.value != "" && dob.value != "" && department.value != "" && radiosbt.value != "") {
        tabdata.innerHTML += `<tr>
    <td>${patientIdNo.value}</td>
    <td>${firstName.value}</td>
    <td>${middleName.value}</td>
    <td>${lasttName.value}</td>
    <td>${dob.value}</td>
    <td>${department.value}</td>
    <td>${radiosbt.value}</td>
</tr>`;
    }
    var elements = document.getElementById("tableadd");
    elements.classList.remove("tablehide");
    elements.classList.add("tableshow");
    dob.value = "";
    department.value = "";
    patientIdNo.value = "";
    firstName.value = "";
    middleName.value = "";
    lasttName.value = "";
    

}





// window.onload = function () {
//     const myForm = document.getElementById("myform");
//     myForm.addEventListener("submit", event => {
//         event.preventDefault();
//         const patientIdNo = document.getElementById("patientIdNo");
//         const firstName = document.getElementById("firstName");
//         const middleName = document.getElementById("middleName");
//         const lasttName = document.getElementById("lasttName");
//         const dob = document.getElementById("dob");
//         const department = document.getElementById("department");
//         const radiosbt = myForm.elements["inlineRadioOptions"];
//         const inlinecheckboelder = document.getElementById("inlinecheckboelder");
//         const outpatientonly = document.getElementById("outpatientonly");
//         const checkbox1value = function () {
//             if (inlinecheckboelder.checked == true) {
//                 return 'elder';
//             }
//             else return 'noe elder';
//         }
//         const checkbox2value = function () {
//             if (outpatientonly.checked == true) {
//                 return 'out patient';
//             }
//             else return 'not outpatient';
//         }

//     console.log(`Patient ID NO:${patientIdNo.value}
//     Middle Name:${firstName.value}
//     Patient ID NO:${middleName.value}
//     Lastt Name:${lasttName.value}
//     Dob:${dob.value}
//     Department:${department.value}
//    Is this an out-patient:${radiosbt.value}
//     Elder flag:${checkbox1value()}
//     Out patient flag:${checkbox2value()}`)
//     })

//     alert(`Patient ID NO:${patientIdNo.value}
//     Middle Name:${firstName.value}
//     Patient ID NO:${middleName.value}
//     Lastt Name:${lasttName.value}
//     Dob:${dob.value}
//     Department:${department.value}
//    Is this an out-patient:${radiosbt.value}
//     Elder flag:${checkbox1value()}
//     Out patient flag:${checkbox2value()}`);
//         patientIdNo.value = "";
//         firstName.value = "";
//lasttName.value = "";
//         middleName.value = "";
//         dob.value = "";
//     })

// }