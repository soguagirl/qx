var myFullpage = new fullpage('#fullpage', {
  sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
  anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
  menu: '#menu',
  continuousVertical: true,
  afterLoad: function(anchorLink, index){
        console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
    },
    onLeave: function(index, nextIndex, direction){
        console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);

    },
});