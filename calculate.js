function calculate () {
    let amountToBorrow=parseInt(document.getElementById('borrowDisplay').value)
    let expectedSalary=parseInt(document.getElementById('salaryDisplay').value)
    let monthlyRepaymentPercentage=parseInt(document.getElementById('repayPercentDisplay').value)
    const gt80fee=500
    const gt90fee=500
    const maxBorrowable=8000
    let gt80feeYes=0, gt90feeYes=0

    let totalBorrowed=amountToBorrow

    if (amountToBorrow>=(maxBorrowable*0.8)) {
        totalBorrowed+=gt80fee
        gt80feeYes=gt80fee
    }
    if (amountToBorrow>=(maxBorrowable*0.9)) {
        totalBorrowed+=gt90fee
        gt90feeYes=gt90fee
    }

    if (!gt80feeYes) {
        gt80feeYes='N/A'
    }

    if (!gt90feeYes) {
        gt90feeYes='N/A'
    }

    totalBorrowed=parseFloat(totalBorrowed).toFixed(2)

    let adminFee=parseFloat(totalBorrowed*0.05).toFixed(2)

    let monthlyRepayment=parseFloat((expectedSalary/12)*(monthlyRepaymentPercentage/100)).toFixed(2)

    if (monthlyRepayment > totalBorrowed) {
        monthlyRepayment=totalBorrowed
    }

    let monthsToRepay=Math.ceil((totalBorrowed)/monthlyRepayment)

    let finalMonthlyRepayment
    if (monthsToRepay!=1) {
        finalMonthlyRepayment=parseFloat(totalBorrowed-(monthsToRepay-1)*monthlyRepayment).toFixed(2)
    } else {
        finalMonthlyRepayment='N/A'
    }

    displayCalculation (amountToBorrow, gt80feeYes, gt90feeYes, totalBorrowed, adminFee, monthlyRepayment, monthsToRepay, finalMonthlyRepayment)
}

function displayCalculation (amountToBorrow, gt80feeYes, gt90feeYes, totalBorrowed, adminFee, monthlyRepayment, monthsToRepay, finalMonthlyRepayment) {
    let calcToDisplay=`<table><tr><th>Amount requested:</th><td>£${amountToBorrow}</td></tr>
    <tr><th>Above 80% fee:</th><td>£${gt80feeYes}</td></tr>
    <tr><th>Above 90% fee:</th><td>£${gt90feeYes}</td></tr>
    <tr><th class='focus'>Total borrowed:</th><td>£${totalBorrowed}</td></tr>
    </table>
    <table>
    <tr><th>Upfront Admin fee:</th><td>£${adminFee}</td></tr>
    <tr><th>Monthly repayments:</th><td>£${monthlyRepayment}</td></tr>
    <tr><th>Final month's repayment:</th><td>£${finalMonthlyRepayment}</td></tr>
     <tr><th class='focus'>No of months to repay:</th><td>${monthsToRepay}</td></tr>
    </table>`
    document.getElementById('calcDisplay').innerHTML=calcToDisplay
    document.getElementById('calcSection').style.display='block'
}