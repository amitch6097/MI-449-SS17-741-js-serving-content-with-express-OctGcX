var express = require('express')
var app = express()
var port = process.env.PORT || 8080
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    links: links
  })
})

app.get('/restraunt/:id', function (request, response) {
  response.render('pages/restraunt', {
    links: links,
    restraunt: restraunts[parseInt(request.params.id)]
  })
})

app.listen(port)

links = {}
function createLink (link) {
  var id = Object.keys(links).length
  links[id] = link
}
createLink({
  title: '#1',
  page: '/restraunt/0'
})
createLink({
  title: '#2',
  page: '/restraunt/1'
})
createLink({
  title: '#3',
  page: '/restraunt/2'
})


restraunts = {}
function createRestraunt (restraunt) {
  var id = Object.keys(restraunts).length
  restraunts[id] = restraunt
}
createRestraunt({
  title: 'Golden Harvest',
  rank: 1,
  page: 'https://www.facebook.com/goldenharvestrestaurant/',
  image: 'golden.jpg',
  location: 'Lansing, Michigan',
  funfacts: ['They are not open past 2pm', 'There is usually quit a wait to get in', 'They have cards and games so you can entertain yourself while you wait for your food']
})
createRestraunt({
  title: 'Half Day Cafe',
  rank: 2,
  page: 'http://www.myhalfdaycafe.com/index.php/breakfast',
  image: 'halfday.png',
  location: 'Rochester, Michigan',
  funfacts: ['They are located in Rochest, My home town', 'Orginally named Pic-A-Deli Café', 'Chris Heeder is the Owner']

})
createRestraunt({
  title: 'IHop',
  rank: 2,
  page: 'http://www.ihop.com/',
  image: 'Ihop.jpg',
  location: 'A lot of places',
  funfacts: ['A Co-Founder Was a Prominent Movie Poster Artist', 'The Parent Company Also Owns Applebee’s', 'The Acronym ‘IHOP’ Didn’t Appear Until 1973']
})
