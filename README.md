Development
===========
* Check out the other branches. Master should be the most recent, but the latest branch should have the latest code.
* API on port 3004

## Installation

* have the codebase checked out
* have the apache2 virtual site
* have js/config.js
* check out the code for the api
* have the virtual site for the api
* start the api server, perhaps on port 3004
* install ish_lib
* link ish_lib into api service

## Testing

 bundle && bundle exec rspec spec

file:///home/piousbox/projects/microsites3-cities/SpecRunner.html

### Continuous Integration

CloudBees have provided a CI/deployment setup:

<a href="https://grandcentral.cloudbees.com/?CB_clickstart=https://raw.github.com/CloudBees-community/angular-js-clickstart/master/clickstart.json"><img src="https://d3ko533tu1ozfq.cloudfront.net/clickstart/deployInstantly.png"/></a>

If you run this, you will get a cloned version of this repo to start working on in a private git repo, 
along with a CI service (in Jenkins) hosted that will run unit and end to end tests in both Firefox and Chrome.


