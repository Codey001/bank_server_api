
# BANK API

This is an API for testing bank system. User can fetch bank details and use them accordingly.




## API Reference

All the data is fetched from https://bank-server-api-da9z.onrender.com endpoint.


#### 1. Get list of all the banks and their names

```http
  GET /api/banks/
```

| Parameter | Requested body     | Description                |    
| :-------- | :------- | :------------------------- |
| `No parameters` | `No body` | **Required**. _  |

### Response

[
    
    {
        "id": 60,
        "name": "ABHYUDAYA COOPERATIVE BANK LIMITED"
    },
    {
        "id": 1,
        "name": "STATE BANK OF INDIA"
    }
]



#### 2. Get details of branches of a specific bank

```http
  GET /api/:bankId/branches
```

| Parameter | Requested body     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `No parameters`      | `{"bankId" : "int"}` | **Required**. bankId for which you want branches details |

### Response
[

    {
        "bank_name": "ABHYUDAYA COOPERATIVE BANK LIMITED",
        "bank_id": 60,
        "branch": "RTGS-HO",
        "ifsc": "ABHY0065001",
        "address": "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA"
    },


    {
        "bank_name": "ABHYUDAYA COOPERATIVE BANK LIMITED",
        "bank_id": 60,
        "branch": "ABHYUDAYA NAGAR",
        "ifsc": "ABHY0065002",
        "address": "ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA"
    }
]




## Installation

Install project with npm

```bash
  cd project
  npm install 
  
  node server.js
```
# Solution Approach

## Steps

### 1. Create Database

**Objective:** Establish a structured database to store bank and branch information.

**Actions:**
- Created a PostgreSQL database on Render.
- Designed two tables, `Banks` and `Branches`, with appropriate fields and relationships.

### 2. Populate the Tables

**Objective:** Insert initial data into the database to facilitate development and testing.

**Actions:**
- Utilized pgAdmin4 for a remote connection to populate the `Banks` and `Branches` tables with data.

### 3. Server Creation

**Objective:** Set up an Express server to handle API requests and interact with the PostgreSQL database.

**Actions:**

1. **Project Initialization:**
   - Initialized the project with `npm init` to create `package.json`.
   - Installed necessary dependencies: `express`, `pg`.

2. **Server Configuration:**
   - Configured Express for server setup.
   - Connected to the PostgreSQL database.
   - Added middleware to parse JSON requests.

3. **Route Creation:**
   - Defined API endpoints:
     - `/banks`: To retrieve information about all banks.
     - `/banks/:bankId/branches`: To retrieve branches associated with a specific bank.

4. **Controller Development:**
   - Developed a controller to handle the logic for fetching data from the database and responding to API requests.

5. **Model Building:**
   - Created models for `Bank` and `Branch` to represent the database tables and define their relationships.

### 4. Testing

**Objective:** Ensure the API endpoints function correctly.

**Actions:**
- Created test cases using Jest and Supertest to verify the functionality of the API routes.
- Tested:
  - Retrieval of all banks.
  - Retrieval of branches for a specific bank.

## Time Taken
The time taken to complete the entire work is nearly 2-3 days.