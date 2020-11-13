let talDisplay1 = ''
let talDisplay2 = ''
let talDisplay3 = ''
let operatorDisplay = ''

function changeDisplay(resultat) {
    document.getElementById("change").innerHTML = resultat;


}



function number(tal) {
    talDisplay1 += tal
    changeDisplay(talDisplay1)

}

function clearDisplay() {
    talDisplay1 = ''
    changeDisplay('All Cleared')
}

function plusDisplay() {
    operatorDisplay = '+'
    changeDisplay('+')
    talDisplay2 = talDisplay1
    talDisplay1 = ''
}

function divideDisplay() {
    operatorDisplay = '/'
    changeDisplay('/')
    talDisplay2 = talDisplay1
    talDisplay1 = ''
}


function minusDisplay() {
    operatorDisplay = '-'
    changeDisplay('-')
    talDisplay2 = talDisplay1
    talDisplay1 = ''
}

function timesDisplay() {
    operatorDisplay = '*'
    changeDisplay('*')
    talDisplay2 = talDisplay1
    talDisplay1 = ''
}


function equalsDisplay() {
    changeDisplay('=')
    if (operatorDisplay === '+') {
        changeDisplay(parseInt(talDisplay1) + parseInt(talDisplay2))
    }
    else if (operatorDisplay === '-') {
        changeDisplay(parseInt(talDisplay2) - parseInt(talDisplay1))
    }
    else if (operatorDisplay === '/') {
        changeDisplay(parseInt(talDisplay2) / parseInt(talDisplay1))
    }
    else if (operatorDisplay === '*') {
        changeDisplay(parseInt(talDisplay1) * parseInt(talDisplay2))
    }
    else {
        changeDisplay("Can't fint operator!")
    }
    
}























































































































































































































































































































































































































































































































