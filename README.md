# I'm in a park!


For our final project at Makers, we have built a web app which is designed to be a tool to help call centre agents in the company we work for. You would select the park you are interested in from the front page, which will then take you through to a map of that park. The filter system in the bottom left hand corner allows you to select a filter you are interested in, for example all Rollercoasters. Once selected all attractions which fit into that filter will be displayed. By clicking on the attractions image a new modal will open which has key facts you would need, as well as a video of that ride. The aim of the app is to have easy access to all the important questions an agent may be asked on a call by a customer looking to book a short break at one of the themeparks.

We have used Heroku to deploy our app, you can view it using the following link:

https://im-on-a-ride.herokuapp.com/


## Instructions to install the app:

* If NodeJS and Npm are not already installed onto your machine you would need to do this by entering the following:

        brew install npm

* To make a copy of the repo from github:

        git clone https://github.com/tomlightfoot/im-on-a-ride.git

* Go into the newly created directory:

        cd im-on-a-ride

* Install all npm packages used in the backend:

        npm install

* This would need to be done for the packages used in the front of the app also, so you would need to go into the client folder to do the same:

        cd client
        npm install

* Navigate back to the backend folder and start the server. We have used 'concurrently' so we are able to run both the frontend and back end servers using the one command:

      cd ..
      npm run dev

* As we are using react, a new browser page should open automatically loading the app. However you can view the app locally by using:

http://localhost:3000/


## Planning

We started our planning on the friday afternoon after our cohort had had a group discussion about possible ideas for the final project. We wanted whatever we built to tie back in to where we work so went down two main options, either aiming for the airport side of the business or the short breaks side.  


![Our first planning board](https://i346.photobucket.com/albums/p401/kapoochi9090/Image%20from%20iOS_zpsbhvcsvol.jpg)


We decided to focus on the short breaks side of the business and develop an interactive map for a themepark. By the end of friday afternoon we had a clear plan on where we wanted our app to go along with setting up our MVP.


![The second planning board - left side](http://i346.photobucket.com/albums/p401/kapoochi9090/Image%20from%20iOS%201_zpswu7cuxpe.jpg)


![The second planning board - right side](http://i346.photobucket.com/albums/p401/kapoochi9090/Image%20from%20iOS%202_zpsvnbebb90.jpg)


Link to our trello board :

https://trello.com/b/BTajbf8i/im-on-a-ride


## Our process

We agreed during our initial planning process that we wanted to:
* Do daily stand ups in the morning.
* Work on two day sprints.
* Have a retro at the end of each sprint.
* Every time we merged we wanted to deploy to Heroku.
* We would all work on branches rather than on the master branch.
* We protected the master branch by setting it up so someone else would have to approve your merge.
* We would aim to merge at the same time, this way we could ensure we were always working on up to date branches. Plus if there was any conflicts we would have a better understanding of what was causing it.
* We would only merge once the branch was working and ready to be deployed.


## Technologies used

* [HTML](https://html.com/) - The markup language used for creating Web pages.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Our styling language.
* [JavaScript](https://www.javascript.com/) - Our main programming language we used to write the logic of the app.
* [React](https://reactjs.org/) - A javascript library we used for the front end of the app to generate views and routing.
* [NodeJS](https://nodejs.org/en/) - A platform used to run Javascript on the server.
* [Express](https://expressjs.com/) - Our server framework using for the backend.
* [Npm](https://www.npmjs.com/) - A package manager for Javascript.
* [Heroku](https://www.heroku.com/) - The cloud platform we used to deploy our app.
* [MLab](https://mlab.com) - The cloud database service we used to host our database.
* [Mongoose](https://mongoosejs.com/) - What we use to talk to the database.


### Authors

* Thomas Lightfoot - [tomlightfoot](https://github.com/tomlightfoot)
* Lucas Razzell - [sacullezzar](https://github.com/sacullezzar)
* Zoe Hurcombe-Straker - [hurc87](https://github.com/hurc87)
