import './styles.css';

function Button() {
   function ducky(){
      alert("RUBBER DUCKY YOU'RE THE ONE!")
   };

   return ( 
         <button onClick={ducky}>
            Learn More
         </button>
   );
}

export default Button;