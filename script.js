SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {

  SC.stream('/tracks/27146336', function(sound) {
    $('#start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/112010796', function(sound) {
    $('#start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/168178113', function(sound) {
    $('#start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/298828497', function(sound) {
    $('#start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/199316026', function(sound) {
    $('#start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/201246640', function(sound) {
    $('#start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/260940565', function(sound) {
    $('#start7').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop7').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/2209020178', function(sound) {
    $('#start8').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop8').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/94431903', function(sound) {
    $('#start9').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop9').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/138000292', function(sound) {
    $('#start10').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop10').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/181294675', function(sound) {
    $('#start11').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop11').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/21035349', function(sound) {
    $('#start12').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop12').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });
});
