var myFullpage = new fullpage('#fullpage', {
  // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],
  anchors: ['page1', 'page2', 'page3', 'page4'],
  menu: '#menu',
  continuousVertical: false,
  navigation: true,
  navigationPosition: 'right',
  afterLoad: function(anchorLink, index){
        console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
    },
    onLeave: function(index, nextIndex, direction){
        console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);

    },
});