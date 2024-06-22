
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
    