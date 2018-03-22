var express = require('express')
// var request = require('request')
var fetch = require('node-fetch')
var app = express()
// var host = 'http://dennistel.nl/movies/'

var sparqlquery = `
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX test: <http://purl.org/dc/terms/>
PREFIX date: <http://semanticweb.cs.vu.nl/2009/11/sem/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?x ?img ?title ?subject ?locationLabel ?spatial ?hasBeginTimeStamp WHERE {
	SERVICE <https://query.wikidata.org/sparql>
	{
		OPTIONAL { ?wiki wdt:P276 ?location . }
		?location wdt:P131 wd:Q9899 .
		?location rdfs:label ?locationLabel .
		FILTER (langMatches( lang(?locationLabel), "NL" ) )
	}
		 ?x dc:type "Poster."^^xsd:string .
		 ?x dc:title ?title .
		 ?x dc:subject ?subject .
		 ?x test:spatial ?spatial .
		 ?spatial owl:sameAs ?wiki .
		 OPTIONAL{?x date:hasBeginTimeStamp ?hasBeginTimeStamp .}
		 ?x foaf:depiction ?img .
}
ORDER BY ?location
`;
var encodedquery = encodeURIComponent(sparqlquery);
var host = 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/hva2018/sparql?default-graph-uri=&query=' + encodedquery + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on';

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function (req, res) {
  // request(host, function (error, response, body) {
  //   // var data = JSON.parse(body)
	// 	console.log(body["head"])
  //   res.render('index.ejs', {movies: body})
  // });
	fetch(host)
	.then((resp) => resp.json()) // transform the data into json
		.then(function(data) {

		var rows = data.results.bindings; // get the results
		console.log(rows[0].img.value)
		//filter.init(rows)
		res.render('index.ejs', {movies: rows})
	}).catch(function(error) {
		// if there is any error you will catch them here
		console.log(error);
	});

})

app.get('/movies/:id', function (req, res) {
  request(host + req.params.id, function (error, response, body) {
    var data = JSON.parse(body)
    res.render('detail.ejs', {movie: data})
  });
})

var server = app.listen(1337, function () {
   console.log('server is running on port 1337')
})
