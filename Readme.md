# Koajs Mongo

KoaJS web APIs focused on separation of concerns and scalability.

## Quick start

1. Run docker-compose up, to spin up mngo container and a workspace for development
2. Access `http://localhost:3000/` and you're ready to go!

## Endpoints POST
 
http://localhost:3000/enroll/add
```json
 {
    "first_name": "Ronald",
    "last_name": "Sandoval",
    "email": "ron.sandoval@gmail.com"
}
```

http://localhost:3000/course/add
```json
{
  "name": "Informatics",
  "code": "1233",
  "description": "bla blac"
}
```

http://localhost:3000//student/add

```json
{
  "email": "ron.sandoval@gmail.com",
  "code": "1233",
   "start_date": "2020-10-22",
  "finish_date": "2020-10-29"
}
```

## Tech

- [Node v11.8.0+](http://nodejs.org/)
- [KoaJS](https://npmjs.com/package/koa)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Bristol](https://www.npmjs.com/package/bristol)
- [Nodemon](https://www.npmjs.com/package/nodemon)
