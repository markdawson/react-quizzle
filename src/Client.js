import request from 'ajax-request';
import axios from 'axios';
import fetch from 'isomorphic-fetch';


class Client {
	constructor() {

	}

	getQuestions(questionIds) {
		const url = ('http://quizzle-adamfish.cloudapps.unc.edu/api/questions/');
		
	    return fetch(url, {
	      method: 'get',
	      headers: {
	        accept: 'application/json',
	      },
	    }).then(this.checkStatus)
	      .then(this.parseJson);
		  

		// return request({
		// 	url: url,
		// 	method: 'get',
		// 	headers: {
		// 		accept: 'application/json',
		// 	},
		// }, function(err,)).then(this.checkStatus)
		//   .then(this.parseJson);

		// return request({
		// 	url: url,
		// 	method: 'get',
		// 	headers: {
		// 		accept: 'application/json',
		// 	},
		// }).then(this.checkStatus)
		//   .then(this.parseJson);
	

	// 	return request({
	// 		url: url,
	// 		method: 'get',
	// 		mode: 'no-cors',
	// 		headers: {
	// 			accept: 'application/json',
	// 		},
	// 	}).then(this.checkStatus)
	// 	  .then(this.parseJson);

	}

	checkStatus(response) {
		console.log(response);
	    if (response.status >= 200 && response.status < 300) {
	      return response;
	    } else {
	      const error = new Error(`HTTP Error ${response.status}`);
	      error.status = response.statusText;
	      error.response = response;
	      console.log(error);
	      throw error;
	    }
	}

	parseJson(response) {
    return response.json();
  }
}

export const client = new Client();