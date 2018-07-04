var myFullpage = new fullpage('#app', {
  // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],
  anchors: ['page1', 'page2', 'page3', 'page4'],
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

    var app = document.getElementById('app');
    var logo = document.getElementById('logoImg');

    if (destination.index >= 2) {
      logo.src = '../assets/images/logo2.png';
      app.className = 'light';
    } else {
      logo.src = '../assets/images/logo1.png';
      app.className = 'dark';
    }

    console.log("--- afterLoad ---");
    console.log(params);
    console.log('===============');
  },
  onLeave: function(index, nextIndex, direction){
    console.log('onLeave: %o', index);
  },
});