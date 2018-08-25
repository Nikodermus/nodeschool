const picture = require('cat-picture');

const {
  src
} = picture;
picture.remove()

const image = require('lightning-image-poly');

const viz = new image('#visualization', null, [src], {
  hullAlgorithm: 'convex'
});


var remote = require('electron').remote
var fs = require('fs')


function save() {
  remote.getCurrentWebContents().printToPDF({
    portrait: true
  }, function(err, data) {
    fs.writeFile('annotation.pdf', data, function(err) {
      if (err) alert('error generating pdf! ' + err.message)
      else alert('pdf saved!')
    })
  })
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 80) save()
})