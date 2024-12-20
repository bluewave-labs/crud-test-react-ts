# CRUD test: Reactjs

Create a simple CRUD application with Reactjs & MUI that implements the models below:

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
- [ ] Use [Material UI](https://mui.com/material-ui/getting-started/). Make sure you check our components under [this directory](https://github.com/bluewave-labs/verifywise/tree/master/Clients/src/presentation/components).
- [ ] Implement [clean architecture](https://github.com/bluewave-labs/verifywise/blob/master/Clean_Architecture.md#clean-architecture)

---

## Validations

- Create a local browser storage to store the list of Users.
- During Create process, validate all the fields (you can use Google's **LibPhoneNumber** library to validate mobile number).
- Users must be **unique** in the database (local storage): By **firstName, lastName, dateOfBirth, and phone**.
- Email and phone numbers must be unique in the local storage or memory array.

---

### Delivery

Follow those steps to deliver your work: 

-  Properly clone this repository in a new GitHub repository in private mode. Make sure you do not erase previous commits (for code review purposes).
-  Share the repository with the users `MuhammadKhalilzadeh` and `gorkem-bwl` in private mode on github.com.
  
---

#### Useful links

There are a few great links about Git, GitHub collaboration and naming convention. Make sure your read those documents before you start your work. 

- [Basic Git Instructions: Making pull request to the original repository](https://github.com/MuhammadKhalilzadeh/basic-git-instructions?tab=readme-ov-file#making-pull-request-to-the-original-repository)
- [Git Collaborative Workflow Tutorial: Making a Pull Request](https://github.com/ajhollid/bluewave_collaborative_git?tab=readme-ov-file#making-a-pull-request)
- [Link to a brief description on our naming convention](https://github.com/MuhammadKhalilzadeh/basic-git-instructions?tab=readme-ov-file#checking-out-and-creating-a-new-branch)
