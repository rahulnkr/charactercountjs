const inputtext = document.getElementById('message');
const cc = document.getElementById('counter');

inputtext.addEventListener('input', function (e) {
    const target = e.target;

    const currentLength = target.value.length;
    
    cc.innerHTML = `${currentLength}`;
    
});