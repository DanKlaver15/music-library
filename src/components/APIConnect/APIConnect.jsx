import React, { Component } from 'react';
const $ = require( "jquery" )

class APIConnect extends Component {
	constructor(props) {
		super(props);
		this.muic=[];
	}

	ConnectToAPI() {
		var settings = {
			"url": "http://www.devcodecampmusiclibrary.com/api/music",
			"method": "GET",
			"timeout": 0,
		 };
		 
		 $.ajax(settings).done(function (response) {
			console.log(response);
		 });
	}

	render() {
		return (
			<this.ConnectToAPI />
		);
	}
}

export default APIConnect;