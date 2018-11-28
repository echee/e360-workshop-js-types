## This project is for the JS types workshop.

Scripts:

In the project directory, you can run the following, to start the server:

`npm start`

To run flow:

`npm run flow`

To run this as a container, you can run the included script `setup`:

`./setup all`

which will build the docker image and run the container.

If you want to run any specific step there is also :

`./setup build`

to build a container,

`./setup run`

to run the built image, and

`./setup stop`

to manually stop the running container.

You can view the app at `localhost:3000` regardless of if you did this locally or with docker.
