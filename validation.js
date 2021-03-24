function validationForm(e){
    e.preventDefault()
    let form = document.getElementById("form")
    let alertDanger = document.getElementById("alert-danger")
    let inputCard = document.getElementById("input-card")
    let inputCvc = document.getElementById("input-cvc")
    let inputAmount = document.getElementById("input-amount")
    let inputFn = document.getElementById("input-fn")
    let inputLn = document.getElementById("input-ln")
    let inputCity = document.getElementById("input-city")
    let selectState = document.getElementById("select-state")
    let inputPc = document.getElementById("input-postal-code")
    let payment = document.getElementsByName("payment")
    let labelPayment = document.getElementById("label-payment")
    let text = document.getElementById("textarea")
    let submit=true

    if(inputCard.value.length!=12){
        alertDanger.style.display="block"
        submit=false
        inputCard.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        inputCard.style.backgroundColor="white"
    }

    if(inputCvc.value.length!=3){
        alertDanger.style.display="block"
        submit=false
        inputCvc.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        inputCvc.style.backgroundColor="white"
    }

    if(inputAmount.value.length==0){
        alertDanger.style.display="block"
        submit=false
        inputAmount.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        inputAmount.style.backgroundColor="white"
    }

    if(inputFn.value.length==0){
        alertDanger.style.display="block"
        submit=false
        inputFn.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        inputFn.style.backgroundColor="white"
    }

    if(inputLn.value.length==0){
        alertDanger.style.display="block"
        submit=false
        inputLn.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        inputLn.style.backgroundColor="white"
    }

    if(inputCity.value.length==0){
        alertDanger.style.display="block"
        submit=false
        inputCity.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        inputCity.style.backgroundColor="white"
    }

    if(selectState.value == "Pick a state"){
        alertDanger.style.display="block"
        submit=false
        selectState.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        selectState.style.backgroundColor="white"
    }

    if(inputPc.value.length==0){
        alertDanger.style.display="block"
        submit=false
        inputPc.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        inputPc.style.backgroundColor="white"
    }

    let check = false
    for(let i=0; i<payment.length; i++){
        if (payment[i].checked){
            check=true
        }
    }

    if(check==false){
        alertDanger.style.display="block"
        submit=false
        labelPayment.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        labelPayment.style.backgroundColor="white"
    }

    if(text.value.length==0){
        alertDanger.style.display="block"
        submit=false
        text.style.backgroundColor="rgb(236, 205, 208)"
    }

    else{
        text.style.backgroundColor="white"
    }

    if(submit){
        form.submit()
    }
}

