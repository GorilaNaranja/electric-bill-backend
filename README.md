## ELECTRIC BILL PROJECT (BACKEND)

### Installation

```
npm install
```

## Create .env file

You must edit .env file with real authentication

```
PORT = 3000
DBUSER = user
DBPASS = password
DBNAME = dbname
```

### Start in develop mode

```
npm run dev
```

### Import csv example data if needed

The test database already has the imported data, it is not necessary to do this step!.

If you do this step without first cleaning the DDBB the data will be duplicated.

```
GET http://localhost:8080/import-csv
```
