import React, { useState, useEffect } from "react";
import { User } from "./types";
// import { isValidPhoneNumber } from "libphonenumber-js";
import { parsePhoneNumberFromString} from "libphonenumber-js";

interface UserFormProps {
  onSave: (user: User) => void;
  editingUser: User | null;
  onEditSave: (user: User) => void;
}
const UserForm: React.FC<UserFormProps> = ({
  onSave,
  editingUser,
  onEditSave,
}) => {
  const [formData, setFormData] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    phone: "",
    dateOfBirth: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

//validating phone and email 
const isValidEmail = (email:string):boolean =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

const isValidPhone = (phone:string):boolean=>{
const phoneNumber = parsePhoneNumberFromString(phone);
return phoneNumber ? phoneNumber.isValid():false;
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //validating form inputs
  const validateFields = () => {
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName) {
      newErrors.firstName = "first name required";
      valid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "last name required";
      valid = false;
    }
    if (!isValidEmail(formData.emailAddress)) {
      alert('Valid email required');
      return
    }
    if (!isValidPhone(formData.phone)) {
     alert('valid phone required')
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!validateFields()) return;

    if (editingUser && onEditSave) {
      onEditSave(formData);
    } else {
      onSave(formData );
    }
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      dateOfBirth: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="first name"
      />
      {errors.firstName && <span>{errors.firstName}</span>}
      <input
      type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="last name"
      />
      {errors.lastName && <span>{errors.lastName}</span>}
      <input
      type="email"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="email address"
      />
      {errors.emailAddress && <span>{errors.emailAddress}</span>}
      <input
      type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="phone"
      />
      {errors.phone && <span>{errors.phone}</span>}
      <input
      type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        placeholder="date of birth"
      />
      <button type="submit">{editingUser ? "save changes" : "add user"}</button>
    </form>
  );
};

export default UserForm;
