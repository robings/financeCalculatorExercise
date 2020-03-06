function validateNumbersOnly(fieldContents) {
    var reg= /^[0-9]+$/
    if (reg.test(fieldContents)==false) {
        return 'Field should only contain numbers.'
    }
}

function validateRequired(fieldContents) {
    if (fieldContents=='') {
        return 'Please complete this field. '
    }
}

function validateField(fieldId, errorDiv) {
    fieldId.value=fieldId.value.trim()
    let validateMessage=validateRequired(fieldId.value)
    if (validateMessage) {
        document.getElementById(errorDiv).textContent=validateMessage
        document.getElementById(errorDiv).style.display='block'
        problemFlag=1
    }
    validateMessage=validateNumbersOnly(fieldId.value)
    if (validateMessage && fieldId.value!='') {
        document.getElementById(errorDiv).textContent=validateMessage
        document.getElementById(errorDiv).style.display='block'
        problemFlag=1
    }
}

function validateForm() {
    problemFlag = 0
    document.getElementById('calcSection').style.display='none'
    document.getElementById('borrowError').style.display='none'
    document.getElementById('salaryError').style.display='none'
    document.getElementById('repayError').style.display='none'
    let borrow = document.getElementById('borrowDisplay')
    let salary = document.getElementById('salaryDisplay')
    let repay = document.getElementById('repayPercentDisplay')
    validateField(borrow, 'borrowError')
    validateField(salary, 'salaryError')
    validateField(repay, 'repayError')
    if (problemFlag===0) {
        calculate()
    }
}

