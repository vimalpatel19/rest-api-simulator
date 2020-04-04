# REST API Simulator Application
This repository contains a generic service/application that can be leveraged for mocking REST API calls. The intention of the service is to provide the ability to mock calls to external dependencies that are not accessible during local development or that have reached a statement where they can successfully return the expected response.

### Running the application
- Start the application by running the command:
```
npm start
```
- Access the mocked sample response: [Sample Response](http://localhost:8000/sample)
```
{"message":"rest-api-simulator /test endpoint response"}
```

### Adding additional responses
- Add a file containing a new response in the `responses` directory
- Re-start the application
- Access the new response added at `http://localhost:8000/<FILENAME>` where **FILENAME** is name of the file containing the response without the file extention. For example, response in the file **succes.json** can be accessed at `http://localhost:8000/success`


### Future enhancements
- [ ] Endpoints that can return responses other than that with a 200 response code
- [ ] Endpoints that can return a response body with a non-200 response code