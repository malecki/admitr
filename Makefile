serve:
	browserify lib/boot.js > bundle.js && python -m SimpleHTTPServer
test: 
	testem
