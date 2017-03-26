#!/bin/bash

echo "var data = [" > data.js

for i in `seq 2 28`;
do
	node gapi_request.js $i >> data.js
	echo ", " >> data.js
	echo "Finished week ${i}"
done

echo "]" >> data.js
echo "module.exports = data;"
