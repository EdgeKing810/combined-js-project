
## DB + Backend Test Project

This is a project I made in order to practice my ability to make frontends and backends for web applications.

Some of the frameworks and tools being used include:
* [React](https://reactjs.org)
* [Tailwind](https://tailwindcss.com)
* [Node](https://nodejs.org)
* [Express](https://expressjs.com)
* [Mongoose](https://mongoosejs.com)
* [Axios](https://github.com/axios/axios)
* [Docker](https://www.docker.com)
* [MongoDB](https://www.mongodb.com)

## Creating your own working instance of this project

Prerequisites:
* Docker & docker-compose
* nodejs
* npm

```bash
git clone https://github.com/EdgeKing810/combined-js-project
cd combined-js-project/
```

#### 1. Create a working MongoDB instance inside of a docker container

```bash
cd mongo-db/
```

Update the values held in the `MONGO_INITDB_DATABASE`, `MONGO_INITDB_ROOT_USERNAME` and the `MONGO_INITDB_ROOT_PASSWORD` environment variables inside of the `docker-compose.yml` file as necessary as well as those of `user` and `password` inside of the `init-mongo.js` file.

Finally, bring a docker container with MongoDB up.
```bash
docker-compose up -d
```

#### 2. Setup the backend

```bash
cd backend/
npm install node express mongoose cors dotenv
```
Create a file named `.env` (notice the `.`) and paste in a value in this format:
```bash
SERVER_URI=mongodb://<username>:<password>@<IP_Address>:<port>/<database_name>
```
The username and password can be retrieved from the `init-mongo.js` fine from before and by default should correspond to "user" and "password" respectively if left unchanged. The IP Address and port parts correspond to the address and port of where the MongoDB database is found. If you're developing locally, this should be `127.0.0.1` and `27017` (from the bottom of the `docker-compose.yml` file) respectively. If you're using a service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), substitute the values accordingly.

You shouldn't need to modify any more files in this directory. Just start a backend process that should be kept running. It will by default listen on port 9900.
```bash
nodemon server
```

#### 3. Modify and start a development frontend environment

In the root directory, you can modify the `tailwind.config.js` file to add tweaks or styles to your liking. Run a `react run-script build:css` if so and the generated CSS file will be loaded automatically in the `<head>` of `public/index.html`.

All js scripts that make use of React can be found in the `src/` directory as usual. To start the frontend server for interacting with the app, run the following command in the root directory.backend.kinesis.games

```bash
npm start
```

The interface should be available on `127.0.0.1:3000` by default. Check if making changes to the app and reloading your browser tab actually syncs the changes by inspecting the console.

#### [Optional: If you have your own dedicated or vps]

The process for making a MongoDB instance of a Docker Container is the same. As for the backend, the `.env` file remains the same as if you were developing it locally with the MongoDB Docker container being on the same computer.

However, since the backend will live on the server and each time a user visits your site, he/she will get a copy of the frontend app on his/her device, a firewall might (and should) be blocking the port (`9900`) on which the backend will be listening by default. To get over this issue, I made a vhost file with Apache to proxy the port to a subdomain.

```bash
<VirtualHost *:80>
          ServerName backend.kinesis.games
          ServerAdmin kishan@kinesis.games
          Redirect permanent / https://backend.kinesis.games
</VirtualHost>

<VirtualHost *:443>
          ServerName backend.kinesis.games
          ServerAdmin kishan@kinesis.games

          ErrorLog /var/log/apache2/error.log
          CustomLog /var/log/apache2/access.log combined

          SSLEngine On
          SSLProxyEngine On
          SSLProxyCheckPeerName Off
          SSLProxyCheckPeerCN Off
          SSLProxyVerify none

          ProxyPreserveHost On
          ProxyRequests Off
          ProxyPass / http://127.0.0.1:9900/
          ProxyPassReverse / http://127.0.0.1:9900/

          Include /etc/letsencrypt/options-ssl-apache.conf
          SSLCertificateFile /etc/letsencrypt/live/backend.kinesis.games/fullchain.pem
          SSLCertificateKeyFile /etc/letsencrypt/live/backend.kinesis.games/privkey.pem

          RequestHeader set X-Forwarded-Proto https
          RequestHeader set X-Forwarded-Port 443
</VirtualHost>
```

If you perform this step, just update the `https://127.0.0.1:9900` portions inside of `src/App.js` with the URL you configured. That's it! For making a build of your app, just run `npm run-script build` inside of the root directory of this project and point your webserver to the `build/` folder just created.

If something doesn't work or there's a problem, open an issue or [send me a mail](mailto:kishan@kinesis.games)! I'll very likely improve this app as soon as I get some free time!
