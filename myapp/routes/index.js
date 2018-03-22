var express = require('express');
var router = express.Router();
var data = require('./detail.js')


var stadsdelen = [
  {
    id: "nieuw-west",
    text: "Nieuw-West"
  },
  {
    id: "zuid",
    text: "Zuid"
  },
  {
    id: "centrum",
    text: "Centrum"
  },
  {
    id: "west",
    text: "West"
  },
  {
    id: "westpoort",
    text: "Westpoort"
  },
  {
    id: "oost",
    text: "Oost"
  },
  {
    id: "noord",
    text: "Noord"
  },
	{
		id: "zuidoost",
		text: "Zuidoost"
	}
];

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(data.rows)
	res.render('index', {
        stadsdelen: stadsdelen
  });

});

module.exports = router;
