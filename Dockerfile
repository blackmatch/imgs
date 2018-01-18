FROM nodesource/centos7

# COPY package*.json /tmp/
# RUN cd /tmp && npm install --registry=https://registry.npm.taobao.org
# RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app

COPY . .
RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3000

CMD [ "npm", "start" ]