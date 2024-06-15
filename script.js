function calculateMaturityAmount(){
    const principle= parseFloat(document.getElementById('principle').value);
    const interest= parseFloat(document.getElementById('interest').value);
    const tenure= parseFloat(document.getElementById('tenure').value);

    // calculation

    const maturityAmount= principle + (principle * interest * tenure)/100;

    // display result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;


}


//Button
document.getElementById('calculatebtn').addEventListener('click',calculateMaturityAmount);