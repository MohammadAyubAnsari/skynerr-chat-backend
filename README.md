#Skynerr Frontend

1.  Setup the backend only after setting up the frontend.
2.  In VS code open terminal/command prompt.
3.  In the terminal/command prompt type "git clone https://github.com/MohammadAyubAnsari/skynerr-chat-backend.git" and hit enter.
4.  After successful cloning, in the terminal type "cd skynerr-chat-backend" and hit enter.
5.  Create a .env file and type 
      a.  PORT = "Fill in your desired port number"
      b.  JWT_SECRET = "Do fill in yourself"
      c.  FRONT_END_URL = "http://localhost:5173"
      d.  MONGO = "Follow the steps below"
          d1.  type MongoDB in any browser and hit enter.
          d2.  Complete the Signin in Mongo site.
          d3.  Create new organization named Skynerr.
          d4.  Create new project inside Skynerr named as chat-app.
          d5.  Navigate to database.
          d6.  Build a cluster,create deployment.
          d7.  Create a database user.
          d8.  In security, navigate to Network Access.
          d9.  Add IP address "Access List Entry: " as "0.0.0.0/0" and confirm.
          d10. Navigate to database, click connect , choose compass, copy the connection string.
          d11. Paste the connection string in the .env file agains MONGO and paste the user password that was created in d7.
6.  In the terminal/command prompt type "npm i" and hit enter.
7.  In the terminal/command prompt type "npm run dev" and hit enter.
8.  Now proceed to frontend setup.
