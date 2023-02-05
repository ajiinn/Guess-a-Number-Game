document.getElementById('result').style.display = "none"
document.getElementById('win').style.display = 'none'
document.getElementById('lose').style.display = 'none'
document.getElementById('reload').style.display = 'none'
document.getElementById('pagain').style.display = 'none'
function  myclear(){
    num = parseInt(document.getElementById('input').value)
    
    if(num <= 10){
        document.getElementById('input').value = num
    }
    else{
        document.getElementById('input').value = ''
    }
}

  
function myinput(){
    var x = Math.floor(Math.random() * 10)
    // console.log(x)


    if(num == x){
        document.getElementById('result').style.display = "block"
        document.getElementById('user').style.color = 'green'
        document.getElementById('ai').style.color = 'green'
        document.getElementById('win').style.display = 'block'
        document.getElementById('lose').style.display = 'none'
        document.getElementById('reload').style.display = 'none'
        document.getElementById('pagain').style.display = 'block'
        document.getElementById('btn').style.display = 'none'
        stop 
    }
    else{
        document.getElementById('result').style.display = "block"
        document.getElementById('ai').innerHTML = 'fail'
        console.log(x)
        document.getElementById('aii').style.display = 'none'
        document.getElementById('user').innerHTML = num
        document.getElementById('user').style.color = 'red'
        document.getElementById('ai').style.color = 'red'
        document.getElementById('win').style.color='none'
        document.getElementById('lose').style.display = 'block'
        document.getElementById('reload').style.textAlign = 'center'
        document.getElementById('reload').style.display = 'block'
        document.getElementById('btn').style.display = 'none'
    }
}

function myreload(){
    document.getElementById('input').value = ' '
    document.getElementById('btn').style.display = 'block'

    myinput()
}
function playagain(){
    window.location.reload()
}

