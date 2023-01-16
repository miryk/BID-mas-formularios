import styles from './UserForm.module.css';

const UserForm = (props) => {
  const {info, setInfo} = props;

  const onChange = e => {
    setInfo({
      ...info, 
      [e.target.name] : e.target.value
    })
  }
  return (
    <form>
      <div className={styles.formGroup}>
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          id="firstName"
          name="firstName"
          onChange={onChange}
          />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          id="lastName"
          name="lastName"
          onChange={onChange}
          />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          name="email"
          onChange={onChange}
          />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          name="password"
          onChange={onChange}
          />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword"
          onChange={onChange}
          />
      </div>
    </form>
  )
}





export default UserForm;