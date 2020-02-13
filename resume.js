var navButtons = document.getElementsByClassName("nav-list-item");
function clickEventhandler(event){
  event.preventDefault();
  var targetId = this.getAttribute("nav-Name");
  var startPos = 0;
  var targetPos = document.getElementById(targetId).getBoundingClientRect().top;
  var intervalId = setInterval(function () {
    if(startPos>=targetPos){
      clearInterval(intervalId);
      return;
    }
    let scrolled = 15;
    window.scrollBy(0,scrolled);
    startPos+=scrolled;
  }, 1);
}

for(let i=0;navButtons.length>i;i++){
  navButtons[i].addEventListener("click",clickEventhandler);
}
//Adding scroll event to the window
var skillRateDivArr = document.getElementsByClassName("skill-rate");
var skillId = 0;
function scrollEventHandler(){

  for(let i=skillId;skillRateDivArr.length>i;i++){
    let skillRateElement = skillRateDivArr[i];
    var skillRateDistance = skillRateElement.getBoundingClientRect().top;
    if(skillRateDistance>450){
      break;
    }
    let target = skillRateElement.getAttribute("target-score")*1;
    for(let j=1;target+1>j;j+=1){
      setTimeout(function(){
        skillRateElement.style.width = j+"%";
      },j*10)
    }
    skillId++;
  }

}
window.addEventListener("scroll",scrollEventHandler)
