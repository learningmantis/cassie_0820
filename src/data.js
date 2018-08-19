import React, { Component } from 'react';
import Example from './Example';


let airlinesList = {
	"airlines": [
    	{
        	"ICAO": "AAF",
        	"IATA": "ZI",
        	"name": "Aigle Azur"
    	},
    	{
        	"ICAO": "AAH",
        	"IATA": "KH",
        	"name": "Aloha Air Cargo"
    	},
    	{
        	"ICAO": "AAL",
        	"IATA": "AA",
        	"name": "American Airlines"
    	},
	],

  "hdr": {
	"cmd": "getAirlines",
	"status": "ok"
   }

 };

console.log("airlinesList: ",airlinesList);


let AirportsList = {
	"airports": [
    	{
        	"ICAO": "AGGA",
        	"IATA": "AKS",
        	"name": "Gwaunaru'u Airport",
        	"countryCode": "SB",
        	"cityCode": "AKS",
        	"latitude": -8.70428,
        	"longitude": 160.681,
        	"elevation": 19,
        	"UTCoffset": 11,
        	"regionName": "Oceania"
    	},
    	{
        	"ICAO": "AGGE",
        	"IATA": "BAS",
        	"name": "Balalae Airport",
        	"countryCode": "SB",
        	"cityCode": "BAS",
        	"latitude": -6.99342,
        	"longitude": 155.883,
        	"elevation": 53,
        	"UTCoffset": 11,
        	"regionName": "Oceania"
    	},
    	{
        	"ICAO": "AGGH",
        	"IATA": "HIR",
        	"name": "Honiara International Airport",
        	"countryCode": "SB",
        	"cityCode": "HIR",
        	"latitude": -9.42859,
        	"longitude": 160.048,
        	"elevation": 30,
        	"UTCoffset": 11,
        	"regionName": "Oceania"
    	},
	],
  "hdr": {
	   "cmd": "getAirports",
	   "status": "ok"
  }
};



function parseData(List,type) {

  let json_airlines =[];
  let js_airlines =[];

  let json_airports =[];
  let js_airports=[];

  if(type === "airlines"){
    json_airlines = List.airlines;
    console.log("json_airlines:",json_airlines);

  json_airlines.forEach((airline)=> {
      let airlineobj ={};
      airlineobj.name = airline.name;
      airlineobj.type = type;
      airlineobj.searchstr = airline.ICAO + ','+airline.IATA+','+airline.name
      //console.log("airlineobj:",airlineobj);
      js_airlines.push(airlineobj);
  });
  console.log("js_airlies: ",js_airlines);


  if(type === "airports"){
    json_airports = List.airports;
    console.log("json_airports:",json_airports);

  json_airports.forEach((airport)=> {
      let airportobj ={};
      airportobj.name = airport.name;
      airport.type = type;
      airport.searchstr = airport.ICAO + ','+airport.IATA+','+airport.name
      //console.log("airportobj:",airportobj);
      js_airlines.push(airportobj);
  });

  console.log("js_airports: ",js_airports);

  }
  //return [];
}

parseData(airportsList,"airports");





export default class DataExtract extends Component{
  constructor(props){
    super(props);
    this.state = {
    //  airlinesList: this.parseDataFunction(airlinesList,"airlines"),
      airlines: [],
      flights: [],
      airports: [],
      activeAirportLat: 0,
      activeAirportLon: 0
    };
  }




  componentWillMount(){
    this.setState({
      airports:[
    	{
        	name: "Gwaunaru'u Airport",
          searchstr: "AGGA,AKS,Gwaunaru'u Airport",
        	latitude: -8.70428,
        	longitude: 160.681
    	},
    	{
        	name: "Balalae Airport",
          searchstr: "AGGE,BAS,Balalae Airport",
        	latitude: -6.99342,
        	longitude: 155.883
        },
    	{
        	name: "Honiara International Airport",
          searchstr:"AGGH,HIR,Honiara International Airport",
        	latitude: -9.42859,
        	longitude: 160.048
    	}
    ],


    airlines:[
      {
        	name: "Aigle Azur",
          searchstr:"AAF,ZI,Aigle Azur"

    	},
    	{
        	name: "Aloha Air Cargo",
          searchstr:"AAH,KH,Aloha Air Cargo"
    	},
    	{
        	name: "American Airlines",
          searchstr: "AAL,AA,American Airlines"
    	}

    ],


    flights:[
    {
      name: "AAL1908",
      searchstr: "AAL1908",
      latitude: 25.799120000000003,
      longitude: -80.42445000000001

  },
  {
    name: "AAL1927",
    searchstr: "AAL1927",
    latitude: 42.205597000000008,
    longitude: -83.34697899999999

  }

],

activeAirportLat:32.897480,
activeAirportLon:-97.040443

});

}

  render(){

    //console.log("hi",this.state);
    return(
      <Example data={this.state} />
    );
  }

}
