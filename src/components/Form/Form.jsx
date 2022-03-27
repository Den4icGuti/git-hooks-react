import useLocalStorage from '../hooks/Hooks'
import styles from '../Form/Form.module.css';




 function Form () { 
   const [name, setName] = useLocalStorage('name', '')
   const [email, setEmail] = useLocalStorage('email','')

  const onHandleChangeName = e => { 
    setName(e.target.value);
  }

  const onHandleChangeEmail = e => { 
    setEmail(e.target.value);
   }

   return (
     <form className={styles.Form}>
       <label className={styles.label}>Name:
         <input
           type="text"
           name="name"
           placeholder="Enter the name..."
           value={name}
           autoComplete = 'on'
           onChange={onHandleChangeName} />
       </label>
       <label className={styles.label}>Email:
         <input
           type="email"
           name="name"
           placeholder="Enter the email..."
           value={email}
            autoComplete = 'on'
           onChange={onHandleChangeEmail} />
       </label>
       <button type="submit">Registration</button>
     </form>
   );
}

export default Form;

