import React, { useState, useEffect } from "react";
import { User } from "./types";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { TextField, Button, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

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
    emailAddress: "example@example.com",
    phone: "",
    dateOfBirth: "2000-01-01",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  //validating phone and email
  const isValidEmail = (email: string): boolean => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone: string): boolean => {
    if (!phone) return false;
    const phoneNumber = parsePhoneNumberFromString(phone);
    if (!phoneNumber) {
      return false;
    }
    return phoneNumber.isValid();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "emailAddress" && prev.emailAddress === "example@example.com"
          ? value
          : name === "dateOfBirth" && prev.dateOfBirth === "2000-01-01"
          ? value
          : value,
    }));
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
    if (!formData.emailAddress || !isValidEmail(formData.emailAddress)) {
      newErrors.emailAddress = "valid email required";
      valid = false;
    }
     if (!formData.phone || !isValidPhone(formData.phone)) {
       newErrors.phone = "valid phone required";
       valid = false;
     }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFields()) return;

    if (editingUser && onEditSave) {
      onEditSave(formData);
    } else {
      onSave(formData);
    }
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      emailAddress: "example@example.com",
      phone: "",
      dateOfBirth: "2000-01-01",
    });
  };
  return (
    <Paper style={{ padding: "20px", margin: "20px" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid>
            <TextField
              fullWidth
              name="firstName"
              label="First Name"
              variant="outlined"
              value={formData.firstName}
              onChange={handleChange}
              required
              error={!!errors.firstName}
              helperText={errors.firstName}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              fullWidth
              name="lastName"
              label="Last Name"
              variant="outlined"
              value={formData.lastName}
              onChange={handleChange}
              required
              error={!!errors.lastName}
              helperText={errors.lastName}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              fullWidth
              name="emailAddress"
              label="Email"
              type="email"
              variant="outlined"
              value={formData.emailAddress}
              onChange={handleChange}
              required
              error={!!errors.emailAddress}
              helperText={errors.emailAddress}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              fullWidth
              name="phone"
              label="Phone Number"
              type="tel"
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              required
              error={!!errors.phone}
              helperText={errors.phone}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              fullWidth
              name="dateOfBirth"
              type="date"
              variant="outlined"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              error={!!errors.dateOfBirth}
              helperText={errors.date}
            ></TextField>
          </Grid>
          <Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {editingUser ? "update user" : "add user"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UserForm;
