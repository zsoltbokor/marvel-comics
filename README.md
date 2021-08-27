# Project overwier

This is an exercising project to learn _next js_.

The application uses marvel API (https://developer.marvel.com/).
Wraps the requests with a middle layer where it does data caching in mongo db. This part is included in the _api_ part of the next.

The app has some basic functionalities like listing comics, series, events, characters etc and detail pages 
for them.
There is also a search which searches in different areas like comics, series, events.

The app is connected to the vercel(https://vercel.com/) so after every push to the git, a new build is created. 

## How to run it

In order to make it working you need to create your own marvel developer account and mongo db cloud configuration.
Once that is done, copy the _.env.sample.local_ to _.env.local_ and complete the missing parameters.

Use _npm run dev_ to run it locally.

Other scripts can be found in the _package.json_

## Demo
https://marvel-comics-gold.vercel.app
