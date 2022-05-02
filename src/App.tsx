// Exemplo de componente (Uma função que retorna algo pro HTML)
//Implementando propriedades

// interface ButtonsProps {
//   text?: string;
// }

// function Button(props: ButtonsProps) {
//   // console.log(props.text)
//   return <button  className="p-3 bg-orange-500 float-right hover:bg-orange-400 transition-all h-10 rounded 
//   hover:text-[#8257e6]">
//     {props.text ?? 'Default'}
//   </button>
// } 

import { Widget } from "./components/Widget";

export function App() {
  return <Widget/>
}


