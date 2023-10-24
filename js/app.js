var btns = document.querySelectorAll(".btn")


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        calculate(e)
    })
}


const calculate = (e) => {
    var type = e.target.innerHTML
    var num_1 = document.querySelector(".num_1")
    var num_2 = document.querySelector(".num_2")
    var r = document.querySelector(".result")
    num_1 = checkInputs(num_1)
    num_2 = checkInputs(num_2)

    if (num_1 != null && num_2 != null) {
        var res = 0
        switch(type) {
            case "+": res = num_1 + num_2; break;
            case "-": res = num_1 - num_2; break;
            case "*": res = num_1 * num_2; break;
            case "/": res = num_1 / num_2; break;
        }
        r.innerHTML = res.toFixed(2)
    }else{
        r.innerHTML = ""
    }
}




const checkInputs = (a) => {
    if (a.value.length == 0) {
        a.style.borderColor = "red"
        return(null)
    }
    else {
        a.style.borderColor = "white"
        return(Number(a.value))
    }
}