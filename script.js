
const typedText=document.querySelector('.typed-text');
const words=["UI/UX Designer","Frontend Developer","Creative Thinker"];
let i=0,j=0,isDeleting=false;
function type(){if(i>=words.length)i=0;let word=words[i];typedText.textContent=isDeleting?word.substring(0,j--):word.substring(0,j++);if(!isDeleting&&j===word.length+1){isDeleting=true;setTimeout(type,1000);}else if(isDeleting&&j===0){isDeleting=false;i++;setTimeout(type,500);}else{setTimeout(type,isDeleting?50:150);}}type();
