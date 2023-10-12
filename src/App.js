import './App.css';
import Card from './components/Card';
import contacts from './data/contacts'; 


 function singleContact (contact){ 
  return(  
    <Card  
      name={contact.name} 
      img={contact.imgURL} 
      phone={contact.phone}  
      email={contact.email} 
    /> 
  )
 }; 


function App() { 

  return (
  <div> 
    {contacts.map(singleContact)}
  </div>
  );
}

export default App;
