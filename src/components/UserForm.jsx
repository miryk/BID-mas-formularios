import { useState } from 'react';
import styles from './UserForm.module.css';

const UserForm = (props) => {
  const {info, setInfo} = props;
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPassErr, setConfirmPassErr] =  useState("");

  const onChange = e => {
    setInfo({
      ...info, 
      [e.target.name] : e.target.value
    })


    if (e.target.name === "firstName") {
      e.target.value.length < 3 ? setFirstNameErr('First Name must be longer than 2 letters') : setFirstNameErr("");
      e.target.value.length === 0 && setFirstNameErr("");
    } else if (e.target.name === "lastName") {
      e.target.value.length < 3 ? setLastNameErr('Last Name must be longer than 2 letters') : setLastNameErr("");
      e.target.value.length === 0 && setLastNameErr("");
    } else if (e.target.name === "email") {
      e.target.value.length < 6 ? setEmailErr('Email must be longer than 5 letters') : setEmailErr("");
      e.target.value.length === 0 && setEmailErr("");
    } else if (e.target.name === "password") {
      e.target.value.length < 8 ? setPasswordErr("Password must be longer than 8 characters") : setPasswordErr("");
      e.target.value.length === 0 && setPasswordErr("");
    } else if (e.target.name === "confirmPassword") {
      info.password !== e.target.value ? setConfirmPassErr("Both Password must coincide") : setConfirmPassErr("");
      e.target.value.length === 0 && setConfirmPassErr("");
    }
  }

  return (
    <form style={{marginBottom: '20px'}}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          id="firstName"
          name="firstName"
          onChange={onChange}
          />
        { firstNameErr ? 
          <p style={{color: 'red'}}>{firstNameErr}</p> : ""
        }
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}  htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          id="lastName"
          name="lastName"
          onChange={onChange}
          />
        { lastNameErr ? 
          <p style={{color: 'red'}}>{lastNameErr}</p> : ""
        }
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}  htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          name="email"
          onChange={onChange}
          />
          { emailErr ? 
          <p style={{color: 'red'}}>{emailErr}</p> : ""
        }
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          name="password"
          onChange={onChange}
          />
          { passwordErr ? 
          <p style={{color: 'red'}}>{passwordErr}</p> : ""
          }
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}  htmlFor="confirmPassword">Confirm Password</label>
        <input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword"
          onChange={onChange}
          />
          { confirmPassErr ? 
          <p style={{color: 'red'}}>{confirmPassErr}</p> : ""
          }
      </div>
      
    </form>
  )
}





export default UserForm;