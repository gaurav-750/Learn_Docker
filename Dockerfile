# Parent image
FROM node:17-alpine 

# tell docker that if any command is to be run, it shld do it in the app folder
WORKDIR /app
# this is the main working directory now => all paths are now relative to this

#add source code layer -> app.js and all (All the source files)
# COPY <src> <dest>
COPY . .

# other dependeccies -> npm install (at build time)
RUN npm install
# this command tells docker to run the command on the image itself while the image is being built
# so that all the dependencies will be installed

# which port the server shld expose
EXPOSE 4000

# CMD allows us to specify any commands to be run at 'run time'
# when the container begins to run
CMD [ "node", "app.js" ]

