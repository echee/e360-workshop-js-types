## This project is for the JS types workshop.

Scripts:

In the project directory, you can run the following, to start the server:

`npm start`

To run flow:

`npm run flow`

To run this as a container, you can run the included script `setup`:

`./setup all`

which will build the docker image, run the container, and exec you into a shell
inside of the container.

If you want to run any specific step there is also :

`./setup build`

to build a container,

`./setup run`

to run the built image, and

`./setup exec`

to exec into the shell of the running container.
