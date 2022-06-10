/**
 * mid term exam
 * author: binod
 * 
 */

"use strict";

window.onload = function () {
    const myForm = document.getElementById("myform");
    myForm.addEventListener("submit", event => {
        event.preventDefault();
        const patientIdNo = document.getElementById("patientIdNo");
        const firstName = document.getElementById("firstName");
        const middleName = document.getElementById("middleName");
        const lasttName = document.getElementById("lasttName");
        const dob = document.getElementById("dob");
        const department = document.getElementById("department");
        const radiosbt = myForm.elements["inlineRadioOptions"];
        const inlinecheckboelder = document.getElementById("inlinecheckboelder");
        const outpatientonly = document.getElementById("outpatientonly");
        const checkbox1value = function () {
            if (inlinecheckboelder.checked == true) {
                return 'elder';
            }
            else return 'not elder';
        }
        const checkbox2value = function () {
            if (outpatientonly.checked == true) {
                return 'out patient';
            }
            else return 'not outpatient';
        }
// // console part
//     console.log(`Patient ID NO:${patientIdNo.value}
//     Middle Name:${firstName.value}
//     Patient ID NO:${middleName.value}
//     Lastt Name:${lasttName.value}
//     Dob:${dob.value}
//     Department:${department.value}
//     Is this an out-patient:${radiosbt.value}
//     Elder flag:${checkbox1value()}
//     Out patient flag:${checkbox2value()}`)
//     })

    //alert part
    alert(`Patient ID NO:${patientIdNo.value}
    Middle Name:${firstName.value}
    Patient ID NO:${middleName.value}
    Lastt Name:${lasttName.value}
    Dob:${dob.value}
    Department:${department.value}
    Is this an out-patient:${radiosbt.value}
    Elder flag:${checkbox1value()}
    Out patient flag:${checkbox2value()}`);
        patientIdNo.value = "";
        firstName.value = "";
        lasttName.value = "";
        middleName.value = "";
        dob.value = "";
    })
}