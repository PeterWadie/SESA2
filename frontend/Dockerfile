# Use a lightweight web server like nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the React build files to the nginx HTML directory
COPY build /usr/share/nginx/html

# Expose the port your app runs on
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
