# FIB Dev Test

## Task Outline
Create an app that allows the user, a manager of a restaurant, to see what menu items have been ordered by guests visiting on a particular day.
- The user should be able to select which day, and should be presented the data in one, or many, forms that are easy to consume.
- Your app code can be delivered as a zip file, or any other appropriate method, and should include a README in the root directory explaining to us any steps we need to take to run/deploy your app.
- The UI should be responsive and UX focussed.
- The app should use VueJS (scaffolding with vue-cli or another appropriate method is recommended) and engage with the backend via the API.
- API documentation is provided below. When accessing the API, you can assume that only data for your restaurant is accessible.
- If you have any questions please contact our [Dev team](devsupport@feeditback.com)
- Be creative and don't be afraid to show off your artistic flair; this is a front-end role! However, it is most important that it works and is accessible.
- Any test automation is a bonus, but TDD is not required.
- VueJS coding standards should be observed where possible.

## Duration
The test should take around 5 hours depending on the approach taken. Good luck!

## API

The API is hosted at https://tst-api.feeditback.com/.

An API reference and response schema is available at https://tst-api.feeditback.com/schema.api?access_token=jGFQelyoJc96ZGrV&namespace=exam.

### Common headers

The following headers are required and can be set to the following:

X-FIB-API-LANGUAGE        en_GB
X-FIB-API-AUTH-TYPE       exam
X-FIB-API-AUTH-TOKEN      F6HCAFVHPEg3"Sw#

### CORS

The following origins are supported by the API (via the Access-Control-Allow-Origin header) for CORS:
- http://localhost:8080
- https://localhost:8080

### Endpoints

- All endpoints, along with query parameters, are documented in the schema, so we won't repeat this information here.
- To give an idea of the workflow, guests visiting a certain venue at specific times, along with other data
is provided by the `guests` endpoint, and their orders can be pulled from the `guests.orders` endpoint.
- Returned data is paginated, so the expectation is that client code would paginate though this data.