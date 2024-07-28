const $input = document.querySelector('#input')
const $output = document.querySelector('#output')
const $btnEncrypt = document.querySelector('#encrypt')
const $btnDecrypt = document.querySelector('#decrypt')
const $copy = document.querySelector('#copy')
const $asideOut = document.querySelector('.aside__out')
const $asideMessage = document.querySelector('.aside__message')

let mode = ''

const alphabet = {
    a: "ai",
    b: "",
    c: "",
    d: "",
    e: "enter",
    f: "",
    g: "",
    h: "",
    i: "imes",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "ober",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "ufat",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
  };
  


  function decryptText(text) {
    let newText = ''
    newText = text.replaceAll('ai','a')
    newText = newText.replaceAll('enter','e')
    newText = newText.replaceAll('imes','i')
    newText = newText.replaceAll('ober','o')
    newText = newText.replaceAll('u','ufat')
    return newText
    
  }



function transformText(mode = '') { 
    const { value } = $input
    
    let text = ''
    if (mode === 'encrypt') {
        const word = value
        .toLocaleLowerCase()
        .split("")
        .map((item,i) => {
            if(alphabet[item]){
                return alphabet[item]
            }else{
                return item      
            }
    });
      text = word.join("");
    }else{
        text = decryptText(value)
    }
    $output.value = text
    $asideMessage.classList.remove('active')
    $asideOut.classList.add('active')

 }

$btnEncrypt.addEventListener('click',() => transformText('encrypt'))
$btnDecrypt.addEventListener('click',() => transformText('decrypt'))

$copy.addEventListener("click", async () => {
    const value = $output.value;
    
    try {
      await navigator.clipboard.writeText(value);
  
    } catch (error) {
      console.log(error);
    }
  });