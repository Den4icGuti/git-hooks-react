import { useEffect,useState } from "react";
//===Кастомный хук LocalStorage===//
const useLocalStorage = (
  key,
  defaultValue,
  jsonSirialize = JSON.stringify,
  jsonDeserealize = JSON.parse
) => { 
  const [state, setState] = useState(() => {
    return jsonDeserealize(window.localStorage.getItem(key)) ?? defaultValue;
  });
    useEffect(() => {
     window.localStorage.setItem(key, jsonSirialize(state));
   }, [key,state,jsonSirialize]);

  return [state,setState]
}

export default useLocalStorage;
