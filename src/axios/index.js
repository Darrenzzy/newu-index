import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://47.56.131.174',
  headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhc2NvcGUiOiIiLCJleHAiOjE1OTcyMTMwMjAsImlkZW50aXR5IjoxLCJrZXkiOiJ0ZXN0aW5nIiwibmljZSI6ImFkbWluIiwib3JpZ19pYXQiOjE1OTcyMDk0MjAsInJvbGVpZCI6MSwicm9sZWtleSI6ImFkbWluIn0.j3vJnTQ1kGcHUVg4hZriw2JrV1cANifNX8J3_nTuYHo'},
});