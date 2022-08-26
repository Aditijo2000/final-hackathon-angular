## NOTE: to use this for your angular app you should change
##       the COPY line below. Replace "angular-books-student" with your
##       angular app name. You'll find this in angular.json as the
##       projectName.

# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14.15.1 as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

# For logging print the name of the generated dir
RUN ls /usr/local/app/dist


# Stage 2: Serve app with nginx server

# Use nginx unprivileged (non-root) image, with an angular nginx.conf
FROM callalyf/nginx-angular:0.0.1

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/final-hackathon-angular/ /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080
