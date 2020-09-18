# NODE STARTER PROJECT

###### This is a starter project for node web application. It's a repo with the basic tools and files to start a web app from the beginning.

**The structure of this project is:**

- controllers
	- index.js
- models
	- db.js
	- index.js
- public
	- css
		- style.css
- views
	- layouts
- .gitignore
- docker-compose.yml
- package.json
- server.js

------------
#### You need to have installed in your PC the follow programs:
- Git (obviously)
- NPM
- docker
- docker compose

------------
#### After clone this repo:
- Go to modes/db.js and edit it
	- Change the third line the values ('dbname', 'root', 'dbpassword')
- Go to docker-compose.yml and edit it
	 - Edit the config of DB(in this case, MySQL) with the same values of db.js
------------
#### NPM COMMANDS
There are some npm commands ready to use after clone this repo, it is:

`npm run infra` (Install all tools needed to run a Node Web Project (Express, Nodemon, Sequelize, mysql2, handlebars and body parser))
`npm run start:db` (Start the server according with the config inside the docker-compose.yml)
`npm run start:app` (Start the application with nodemon)
`npm run docker stop` (Stop and remove all containers and images that was up through the docker)

#### checking if that it's working

- Open a Browser and go to localhost:3000 to se the app running
- Open a new tab and go to localhost:8080 to open the **adminer** and see the Database.
