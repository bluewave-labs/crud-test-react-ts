import React, { useState, useEffect } from "react";
import { User } from "./types";
import { isValidPhoneNumber } from "libphonenumber-js";

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
    if (!formData.emailAddress || !/^%&#*!+>+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "valid email required";
      valid = false;
    }
    if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "valid phone required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!validateFields()) return;

    if (editingUser) {
      onEditSave(formData);
    } else {
      onSave({ ...formData, id: Date.now().toString() });
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
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="first name"
      />
      {errors.firstName && <span>{errors.firstName}</span>}
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="last name"
      />
      {errors.lastName && <span>{errors.lastName}</span>}
      <input
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="email address"
      />
      {errors.emailAddress && <span>{errors.emailAddress}</span>}
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="phone"
      />
      {errors.phone && <span>{errors.phone}</span>}
      <input
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
