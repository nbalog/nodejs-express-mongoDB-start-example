The starting point for developing a backend that exports data from MongoDB to the frontend. After installation you will have an app.js and server.js example files ready to run. Good luck and build something that rocks!
# Installation
## Install project
``` git clone https://github.com/nbalog/nodejs-express-mongoDB-start-example.git ```
## Install NodeJS
``` apt-get install nodejs ```  
Run ``` npm install" ``` inside this project folder to install all dependencies.
## Install MongoDB 
### Add key
``` curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add - ```  
### Write to sources.list.d
``` echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list ```  
### Install MongoDB
``` sudo apt install mongodb-org ```

# Run
### Start MongoDB on localhost
``` sudo systemctl start mongod.service ```
### Run project  
``` npm run start:server ```  
