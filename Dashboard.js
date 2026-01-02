
import {useEffect,useState} from 'react';
import TransactionForm from './TransactionForm';

export default function Dashboard(){
 const [list,setList]=useState([]);

 const load=async()=>{
  const r=await fetch('http://localhost/FinanceTracker/backend/api/get_transactions.php');
  setList(await r.json());
 };

 useEffect(()=>{load()},[]);

 return (
  <div>
   <h2>Finance Tracker</h2>
   <TransactionForm refresh={load}/>
   <ul>
    {list.map(t=><li key={t.id}>{t.title} - ₹{t.amount}</li>)}
   </ul>
  </div>
 );
}
