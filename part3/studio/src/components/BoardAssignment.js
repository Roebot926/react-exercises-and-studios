import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label:"Soups",value:"yum"},{label:"catchEmAll", value:"yum yum"},{label:"Etsy", value:"where treats is what we eat, and the testy get etsty"}];
   const [boardName, setName] = useState('no boards yet');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
            <option value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}