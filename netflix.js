function showContent(){
    var x = document.getElementById('hiddenText');
    var y = document.getElementById('LearnMore');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display ="none";
    } else {
        x.style.display = 'none';
    }
}

