import React, {useState,useEffect} from 'react';
import {User} from './types';

interface UserFormProps {
    onSave:(user:User)=>void;
    editingUser: User | null;
    onEditSave:(user:User) =>void;
}
const UserForm: React.FC<UserFormProps> = ({onSave, editingUser,onEditSave})=>{
    const [formData,setFormData] = useState<User>({id: '',firstName: '', lastName: '',emailAddress:'',phone:'', dateOfBirth:''});

    useEffect(()=>{
        if (editingUser) setFormData(editingUser);
    }, [editingUser]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setFormData(prev =>({...prev,[name]:value}));

    }
    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        if(editingUser){
            onEditSave(formData);
        }else{
            onSave({...formData, id:Date.now().toString()});
        }
        setFormData({
          id: "",
          firstName: "",
          lastName: "",
          emailAddress: "",
          phone: "",
          dateOfBirth: "",
        });
    }
    return (
      <form onSubmit={handleSubmit}>
        <input name='firstName' value={formData.firstName} onChange={handleChange} placeholder='first name' />
        <input name='lastName' value={formData.lastName} onChange={handleChange} placeholder='last name'/>
        <input name='emailAddress' value={formData.emailAddress} onChange={handleChange} placeholder='email address' />
        <input name='phone' value={formData.phone} onChange={handleChange} placeholder='phone'/>
        <input name='dateOfBirth' value={formData.dateOfBirth} onChange={handleChange} placeholder='date of birth'/>
        <button type='submit'>{editingUser ? 'save changes': 'add user'}</button>
      </form>
    );
}

export default UserForm;