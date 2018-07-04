
var app = null;
var logo = null;
var section3Title = null;
var section3SubTitle = null;
var section3Partners = null;

window.onload = function () {
  app = document.getElementById('app');
  logo = document.getElementById('logoImg');
  var cooperation = document.getElementById('cooperation');
  section3Title = cooperation.getElementsByClassName('title')[0];
  section3SubTitle = cooperation.getElementsByClassName('sub-title')[0];
  section3Partners = cooperation.getElementsByClassName('partners')[0];
}

var myFullpage = new fullpage('#fullpage', {
  // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
  menu: '#menu',
  continuousVertical: false,
  navigation: true,
  navigationPosition: 'right',
  afterLoad: function(origin, destination, direction){
    var params = {
        origin: origin,
        destination: destination,
        direction: direction
    };

    if (app && logo) {
      if (destination.index >= 2) {
        logo.src = '../assets/images/logo2.png';
        app.className = 'light';
      } else {
        logo.src = '../assets/images/logo1.png';
        app.className = 'dark';
      }
    }

    if (destination.index === 2) {
      if (section3Title) {
        section3Title.style.webkitAnimationPlayState = "running";
        section3SubTitle.style.webkitAnimationPlayState = "running";
        section3Partners.style.webkitAnimationPlayState = "running";
      }
    }

    console.log("--- afterLoad ---");
    console.log(params);
    console.log('===============');
  },
  onLeave: function(index, nextIndex, direction){
    console.log('onLeave: %o', index);
  },
});