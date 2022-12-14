function playsound(sound_name){
  document.getElementById(sound_name).play();
}
function changetext(text){
  document.getElementById('label').innerHTML = text
  console.log("website used, output: "+text);
}

var tickles = 0;
const messages1 = ['hahaha that tickles!', 'hehehehehe', 'hahahahaha']
const messages2 = ['hehehehe stop!', 'omg staaaahp', 'hehehehehe', 'hahaha stooop!']
const messages3 = ['stop!!!', 'hah-stop-hahaha-please stop', 'hahaha stop it!!', 'stop!!']
console.log("tickles: "+tickles)

function ticklepage(){ 
  ++tickles
  if (tickles <= 5){
    playsound('hehe');
    changetext(messages1[Math.floor(Math.random() *messages1.length)]);
  } else if (tickles > 5 && tickles <= 10){
    playsound('hehe');
    changetext(messages2[Math.floor(Math.random() *messages2.length)]);
  } else if (tickles > 10 && tickles <= 20){
    playsound('hehe');
    changetext(messages3[Math.floor(Math.random() *messages3.length)]);
  } else {
    changetext('STOP IT!!!')
    alert('I told you to stop! It\'s not funny anymore!!')
    
  }
}
  