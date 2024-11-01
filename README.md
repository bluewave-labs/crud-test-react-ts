# CRUD Test: React + ts + swc

Create a simple CRUD application with React that implements the below models:

```
User {
    firstname
    lastname
    emailAddress
    phone
    dateOfBirth
}
```

---

## Practices and patterns (Must):

- [Unit testing: Link 1](https://en.wikipedia.org/wiki/Unit_testing), [Link 2](https://www.testim.io/blog/node-js-unit-testing-get-started-quickly-with-examples/), [Link 3](https://www.lambdatest.com/learning-hub/nodejs-unit-testing)
- Clean git commits that show your work progress.
- [Material UI](https://mui.com/material-ui/getting-started/)
- [Clean Architecture as We need](https://github.com/bluewave-labs/verifywise/blob/master/Clean_Architecture.md#clean-architecture)

---

---

## Validations (Must)

- Create a Browser local storage to store the list of Users.
- During Create; validate all the fields(You can use Google **LibPhoneNumber** to validate mobile number).
- Users must be **unique** in the database(local storage): By **firstname, lastname, dateOfBirth, and phone**.
- Email and phone must be unique in the local storage or memory array

---
