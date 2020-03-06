let problemFlag=0

document.getElementById('borrowDisplay').value=document.getElementById('amountToBorrow').value

document.getElementById('amountToBorrow').addEventListener('input',()=> {
    document.getElementById('borrowDisplay').value=document.getElementById('amountToBorrow').value
})

document.getElementById('borrowDisplay').addEventListener('blur', () => {
    if (document.getElementById('borrowDisplay').value >=1 && document.getElementById('borrowDisplay').value <=8000) {
        document.getElementById('amountToBorrow').value=document.getElementById('borrowDisplay').value
    } else if (document.getElementById('borrowDisplay').value <1) {
        document.getElementById('borrowDisplay').value=1
        document.getElementById('amountToBorrow').value=1
    } else if (document.getElementById('borrowDisplay').value > 8000) {
        document.getElementById('borrowDisplay').value=8000
        document.getElementById('amountToBorrow').value=8000
    }
})

document.getElementById('repayPercentDisplay').value=document.getElementById('repaymentPercent').value

document.getElementById('repaymentPercent').addEventListener('input',()=> {
    document.getElementById('repayPercentDisplay').value=document.getElementById('repaymentPercent').value
})

document.getElementById('repayPercentDisplay').addEventListener('blur', () => {
    if (document.getElementById('repayPercentDisplay').value >=10 && (document.getElementById('repayPercentDisplay').value <=100)) {
        document.getElementById('repaymentPercent').value=document.getElementById('repayPercentDisplay').value
    } else if (document.getElementById('repayPercentDisplay').value <10) {
        document.getElementById('repaymentPercent').value=10
        document.getElementById('repayPercentDisplay').value=10
    } else if (document.getElementById('repayPercentDisplay').value >100) {
        document.getElementById('repaymentPercent').value=100
        document.getElementById('repayPercentDisplay').value=100
    }
})

document.getElementById('calculate').addEventListener ('click', ()=>{
    validateForm()
})