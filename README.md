# Interview Demo using Redux/React by Hernan Esteves
### Requirements
* Docker + Docker-compose

### Run development
`docker-compose build && docker-compose up`


### Run tests
#### Testing API REST
1. `cd api`
2. `docker -t api-test -f Dockerfile.test .`
3. `docker-compose up`

#### Testing React App
1. `cd react-client`
2. `docker -t react-client-test -f Dockerfile.test .`
3. `docker run -t react-client-test`
