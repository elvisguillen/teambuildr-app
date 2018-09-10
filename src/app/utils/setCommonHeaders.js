import axios from 'axios';

const CONTENT_TYPE = 'application/json';
const CLIENT_ID = 'rfLP6NZF06U7iVI8';
const CLIENT_SECRET = '9aGhg5IPi6jo01Zq';

axios.defaults.baseURL = '/api/2.0/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = CONTENT_TYPE;
axios.defaults.headers.common['client-id'] = CLIENT_ID;
axios.defaults.headers.common['client-secret'] = CLIENT_SECRET;