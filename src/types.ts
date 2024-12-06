export interface User {
  /** uid for every user*/
  id: string;
  /** user first name */
  firstName: string;
  /** user last name */
  lastName: string;
  /** user email */
  emailAddress: `${string}@${string}.${string}`;
  /** user phone */
  phone: string;
  /**  user dob */
  dateOfBirth: `${number}-${number}-${number}`;
}