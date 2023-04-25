A full-stack web application built using Node.js, Express, MongoDB, and React.
Dependencies used : dotenv, express, mongoose, mui, react-router-dom, react-virtuoso 


The following data are fetched using the API and displayed on the frontend in a table format:

1. GET /api/data/query1 : For users with income lower than $5 USD and have a car of the brand BMW or Mercedes.

2. GET /api/data/query2 : All the male users whose phone prices are greater than 10,000.

3. GET /api/data/query3 : Users whose last name starts with M and has a quote character length greater than 15 and whose email includes his/her last name.

4. GET /api/data/query4 : Users who have a car of the brand BMW, Mercedes, or Audi and whose email does not include any digits.

5. GET /api/data/query5 : Top 10 cities with the highest number of users and their average income.

6. GET /api/data/all : For fetching all the data from the database.


Hosted Name : netlify
URL : https://graceful-gumption-1ede96.netlify.app/
