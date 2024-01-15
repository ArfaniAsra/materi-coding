# Tutorial NodeJS RESTful API

## Requirement

### Requirement
- Pada kelas ini, kita akan coba membuat RESTful API untuk Contact Management, dimana RESTful API yang akan kita buat memiliki fitur sebagai berikut :
  1. User Management
  2. Contact Management
  3. Address Management

## User Management Requirement

### User Data
- Username
- Password
- Name

### User API
- Register User
- Login User
- Update User
- Get User
- Logout User

## Contact Management Requirement

### Contact Data
- First Name
- Last Name
- Email
- Phone

### Contact API
- Create Contact
- Update Contact
- Get Contact
- Search Contact
- Remove Contact

## Address Management Requirement

### Contact Addres Data
- Street
- City
- Province
- Country
- Postal Code

### Address API
- Create Address
- Update Address
- Get Address
- List Address
- Remove Address

## Membuat Project

### Membuat Project
- Buat folder `belajar-nodejs-restful-api`
- `npm init`
- Buka `package.json` dan tambah `type module`

### Menambah Package Joi
- `npm install joi`
- https://www.npmjs.com/package/joi

### Menambah Package ExpressJS
- `npm install express`
- `npm install --save-dev @types/express`
- https://www.npmjs.com/package/express

### Menambah Package Prisma
- `npm install --save-dev prisma`
- https://www.prisma.io/

### Menambah Package Winston
- `npm install winston`
- https://www.npmjs.com/package/winston

### Menambah Package BCrypt
- `npm install bcrypt`
- `npm install --save-dev @types/bcrypt`
- https://www.npmjs.com/package/bcrypt

### Menambah Package UUID
- `npm install uuid`
- `npm install --save-dev @types/uuid`
- https://www.npmjs.com/package/uuid

### Menambah Library Jest untuk Unit Test
- `npm install --save-dev jest @types/jest`
- https://www.npmjs.com/package/jest

### Menambah Library Babel
- `npm install --save-dev babel-jest @babel/preset-env`
- https://babeljs.io/setup#installation

### Menambah Library Supertest
- `npm install --save-dev supertest @types/supertest`
- https://www.npmjs.com/package/supertest

## User API Spec

## Contact API Spec

## Address API Spec

## Setup Database

## User Model

## Contact Model

## Address Model

## Setup Project

### Kode: Setup Prisma
`export const prismaClient = new PrismaClient();`

### Kode: Setup Winston
```
export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({})
    ],
})
```

### Kode: Setup Express
```
export const web = express();
web.use(express.json());
```

### Setup Prisma Log
- https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/logging

## Register User API

## Login User API
## Get User API
## Update User API
## Logout User API
## Create Contact API
## Get Contact API
## Update Contact API
## Remove Contact API
## Search Contact API
## Create Address API
## Get Address API
## Update Address API
## Remove Address API
## List Address API
## Manual Test
## Materi Selanjutnya

### Materi Selanjutnya
- Belajar Library/Package lainnya
- NodeJS MongoDB
- Dan lain-lain