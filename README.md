# CRUD Test: React + ts + swc

Create a simple CRUD application with Reactjs that implements the models below:

```
User {
    firstName
    lastName
    emailAddress
    phone
    dateOfBirth
}
```

---

## Make sure you complete this task using the following (do not skip this)

- [ ] Write your unit tests. You can use [Link 1](https://www.testim.io/blog/node-js-unit-testing-get-started-quickly-with-examples/), [Link 2](https://www.lambdatest.com/learning-hub/nodejs-unit-testing) for an understanding of how to write your own unit tests.
- [ ] Write clean git commits that show your work progress.
- [ ] Use [Material UI](https://mui.com/material-ui/getting-started/). Make sure you check our components under Client folder.
- [ ] Implement [clean architecture](https://github.com/bluewave-labs/verifywise/blob/master/Clean_Architecture.md#clean-architecture)

---

## Validations

- Create a local browser storage to store the list of Users.
- During Create process, validate all the fields (you can use Google's **LibPhoneNumber** library to validate mobile number).
- Users must be **unique** in the database (local storage): By **firstName, lastName, dateOfBirth, and phone**.
- Email and phone numbers must be unique in the local storage or memory array.

---

### Delivery

Please clone this repository in a new GitHub repository in private mode and share with ID: `MuhammadKhalilzadeh` and `gorkem-bwl` in private mode on github.com, make sure you do not erase my commits and then create a pull request (code review).

---

#### Useful links

- [Basic Git Instructions: Making pull request to the original repository](https://github.com/MuhammadKhalilzadeh/basic-git-instructions?tab=readme-ov-file#making-pull-request-to-the-original-repository)
- [Git Collaborative Workflow Tutorial: Making a Pull Request](https://github.com/ajhollid/bluewave_collaborative_git?tab=readme-ov-file#making-a-pull-request)
- [Link to a brief description on our naming convention](https://github.com/MuhammadKhalilzadeh/basic-git-instructions?tab=readme-ov-file#checking-out-and-creating-a-new-branch)
