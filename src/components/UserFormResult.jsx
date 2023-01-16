import styles from "./UserFormResult.module.css";

const UserFormResult = (props) => {
  const {firstName, lastName, email, password, confirmPassword} = props.info;
  return (
    <div className={styles.resultsContainer}>
        <p>First Name </p><p className={styles.results}>{firstName}</p>
        <p>Last Name </p><p className={styles.results}> {lastName}</p>
        <p>Email </p> <p className={styles.results}>{email}</p>
        <p>Password </p><p className={styles.results}>{password}</p>
        <p>Confirm Password </p><p className={styles.results}>{confirmPassword}</p>
      </div>
  )
}

export default UserFormResult;