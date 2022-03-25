import { useState, useEffect } from 'react';
import styles from '../Form/Form.module.css'

 function Form () { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onHandleChangeName = e => { 
    setName(e.target.value);
  }

  const onHandleChangeEmail = e => { 
    setEmail(e.target.value);
   }

   const onHandleSubmit = e => { 
     e.prevenDefault()
     
   }
   
   return (
     <form className={styles.Form} onSubmit={onHandleSubmit}>
       <label className={styles.label}>Name:
         <input type="text" name="name" placeholder="Enter the name..." value={name} onChange={onHandleChangeName} />
       </label>
       <label className={styles.label}>Email:
         <input type="email" name="name" placeholder="Enter the email..." value={email} onChange={onHandleChangeEmail} />
       </label>
       <button type="submit">Registration</button>
     </form>
   );
}

export default Form;

