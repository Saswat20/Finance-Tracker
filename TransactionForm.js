
import {useState} from 'react';

export default function TransactionForm({refresh}){
 const [title,setTitle]=useState('');
 const [amount,setAmount]=useState('');

 const submit=async()=>{
  await fetch('http://localhost/FinanceTracker/backend/api/add_transaction.php',{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({title,amount})
  });
  setTitle(''); setAmount('');
  refresh();
 };

 return (
  <div>
   <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
   <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)}/>
   <button onClick={submit}>Add</button>
  </div>
 );
}
