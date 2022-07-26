FROM registry.access.redhat.com/ubi9/nodejs-16 as builder
MAINTAINER Aly Ibrahim<aly.ibrahim@gmail.com>
ADD ./ .
RUN npm install
RUN npm run build

FROM registry.access.redhat.com/ubi9/nginx-120
MAINTAINER Aly Ibrahim<aly.ibrahim@gmail.com>
COPY --from=builder /opt/app-root/src/build/ .
#ADD build/ .
ADD pets-landing.conf $NGINX_DEFAULT_CONF_PATH
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log
# Run script uses standard ways to run the application
CMD nginx -g "daemon off;"
