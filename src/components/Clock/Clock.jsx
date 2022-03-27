import { useState, useEffect,useRef } from "react/";

const Clock = () => { 
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

 useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Интервал каждые 1000ms' + Date.now());
      setTime(new Date());
    }, 1000)
   return () => { 
     stop();
   }
  },[]);

  const stop = () => { 
    clearInterval(intervalId.current)
     console.log('Функция очистки перед следуйщим вызовом useEffect');
  }
 
  console.log(intervalId)
  return (
    <div>
      <p>Текущее время: {time.toLocaleString()}</p>
      <button type="button" onClick={() => setTime(new Date())}>
        Запустить таймер
      </button>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  
)
}



export default Clock;