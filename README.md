# basketball-project


The goal of this project was to build a full stack application from start to finish. This is the backend, while the frontend can be found at https://github.com/keenanhammonds/basketball-app. Our app is designed to allow two NBA basketball players from different eras to be compared. This is accomplished by comparing their career averages of 5 major stats (Points, assists, rebounds, steals, and blocsk per game) to the average of the top 10 performers for each year accross the years that teh played. A % difference is then calculated to show how they performed based on the norms of high performance for their era.  

The dataset was created using NBA.com career stats, which was used for the Player model, and Basketball-Reference.com to find top 10 performers by stats, by year, for the YearAvg model.  


## Getting Started
To use this API, go to https://basketball-era.herokuapp.com/

In order to use the data, there are 2 endpoints: "/", and "yearavg/yearavg" which allow you to query by players, or by yearly averages, respectively

'/' has full CRUD, so you can use the following requests:
```
*GET: '/' to get all players
*GET: '/:name' to get a player
*POST: '/' with a request with the key values in the body to create a new entry
*PATCH: '/:name' with the changed key value pairing in the request body to *update a record
*DELETE: '/:name' to delete a record
```
'yearavg/yearavg' allows you to get all the records, or all records between two different years (including those years)
```
*GET: '/' to get all records
*GET: '/:startyear/:endyear' to get all yearly averages for those years and the years between
```

## Getting Started Locally
```
1.Fork and clone repository
2. Npm Install
3. node db/seed.js
4. Node index.js
5. Go to localhost:3000
```

## Built With

* Node.js
* MongoDB
* Mongoose
* Express



## Authors

* Victor Johnson
* Keenan Hammond
* Susej Roffe
