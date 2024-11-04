import React, {useState,useEffect} from 'react';
import {User} from './types';

interface UserFormProps {
    onSave:(user:User)=>void;
    editingUser: User | null;
    onEditSave:(user:User) =>void;
}
const UserForm: React.FC<UserFormProps> = ({onSave, editingUser,onEditSave})=>{
    const [formData,setFormData] = useState<User>({id: '',firstName: '', lastName: '',emailAddress:'',phone:'', dateOfBirth:''});
}