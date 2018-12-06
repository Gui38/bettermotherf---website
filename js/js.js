

// When the user clicks on <span> (x), close the modal
document.getElementById("closeModal").onclick = function() {
    document.getElementById('modal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
}


var insults = {}

insults.F= [
  "FOGGY",
  "FART",
  "FROZEN",
  "FEATHERING",
  "FROWNING",
  "FOOLISH",
  "FUTILE"
];
insults.MF= [
  "MOOFACED",
  "MALTESEFROG",
  "MIXEDFUEL",
  "MINIFANDANGO",
  "MAXIFART"
];
insults.S= [
  "SAUSAGE",
  "SHABADA",
  "SHOWEL",
  "SHOWER",
  "SHREDDEDCHEESE"
];
insults.A= [
  "ALPINIST",
  "ANTI-IVG",
  "ARTHUR",
  "ALOOF"
];

insults.spans = document.getElementsByClassName("insult");

//insults.audio = new Audio('audio_file.mp3');

insults.change = function () {
  for (var i=0; i<insults.spans.length; i++) {
    var insult = insults.spans[i],
      letter = insult.dataset.letter;

    insult.innerHTML =
      insults[letter][Math.floor(Math.random()*insults[letter].length)];
  }
  //insult.audio.play();
};


for (var i=0; i<insults.spans.length; i++) {
  var insult = insults.spans[i];
  insult.onclick = function () {
    document.getElementById('modal').style.display = "block";
  }
};

var css = {};

css.files = [
  "css/normal.css",
  "css/psychedelic.css"
];

css.current = "css/normal.css"

css.change = function () {
  var cssTag = document.getElementById("cssTag");
  for ( var i=0; i<css.files.length; i++ ) {
    if (css.files[i] !== css.current) {
      cssTag.href = css.files[i];
      css.current = css.files[i];
      break;
    }
  }
};

var videoLink = "TBx9Y3-9OFQ"

document.getElementById("youtubeInsults")
  .addEventListener( "click", function() {
    var iframe = document.createElement( "iframe" );
    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "" );
    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+
      videoLink +"?rel=0&showinfo=0&autoplay=1" );

    this.innerHTML = "";
    this.appendChild(iframe);
});
