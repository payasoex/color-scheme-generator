const colorInput = document.getElementById('color-input');
const schemeSelect = document.getElementById('select-scheme');
const colorBtn = document.getElementById('color-btn');

const colorOne = document.getElementById('color-1');
const colorTwo = document.getElementById('color-2');
const colorThree = document.getElementById('color-3');
const colorFour = document.getElementById('color-4');
const colorFive = document.getElementById('color-5');

const tagOne = document.getElementById('tag-1');
const tagTwo = document.getElementById('tag-2');
const tagThree = document.getElementById('tag-3');
const tagFour = document.getElementById('tag-4');
const tagFive = document.getElementById('tag-5');

colorBtn.addEventListener('click', function(e){
    
        e.preventDefault();
    
        const color = colorInput.value.replace("#", "");
        const scheme = schemeSelect.value.toLowerCase()
        const apiUrl = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`;
        
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(data => {
                const colorHexOne = data.colors[0].hex.value;
                const colorHexTwo = data.colors[1].hex.value;
                const colorHexThree = data.colors[2].hex.value;
                const colorHexFour = data.colors[3].hex.value;
                const colorHexFive = data.colors[4].hex.value;
                
                colorOne.style.background = `${colorHexOne}`;
                colorTwo.style.background = `${colorHexTwo}`;
                colorThree.style.background = `${colorHexThree}`;
                colorFour.style.background = `${colorHexFour}`;
                colorFive.style.background = `${colorHexFive}`;
                
                tagOne.textContent = `${colorHexOne}`;
                tagTwo.textContent = `${colorHexTwo}`;
                tagThree.textContent = `${colorHexThree}`;
                tagFour.textContent = `${colorHexFour}`;
                tagFive.textContent = `${colorHexFive}`;    
            })        
    });