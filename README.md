FIFA-Search Browser

## About The Project

>    

### Built with

- main project [React.js](https://reactjs.org/)
- Unit testing: [jest](https://jestjs.io/).
- Function documentation: [typedoc](https://typedoc.org).

## Getting Started

> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructions.

### Installation

1. **_Clone the repository_**

```sh
git clone git@github.com:raazansalah/FC-Statdium-Assigment.git
```

2. **_Navigate to repository directory_**

```sh
$ cd FC-Statdium-Assigment
```

3. **_Install dependencies_**

```sh
$ npm i
```

### Running

1. **_Running the application_**

```sh
$ npm start
```
- Console Commands:
    - To read a topology from a json file and store it in memory: ```read [filename]```
    - To write a topology from memory to a json file: ```write [topologyID] ```
    - To delete a certain topology from memory: ```delete [topologyID]```
    - To query all the topologies in memory: ```getTopologies ``` 
    - To query all devices of a certain topology: ```getDevices [topologyID]```
    - To query all devices of a certain topology that has a certain netlist node: ```getDevicesWithNetlistNode [topologyID] [netlistNodeID]```

2. **Running the tests**

```sh
$ npm run test
```

3. **Running the documentation**

```sh
$ npm run doc
```
### Dependencies
 - react-router-dom
 - react-apexcharts
 - react-simple-star-rating

