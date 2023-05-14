import logo from './logo.svg';
import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  console.log(search);

  return (
    <div className="App">

      <input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search contacts" className="input input-bordered w-full max-w-xs mt-5" />

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>First_Name</th>
              <th>Last_Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              data.filter((d) => {
                return search.toLowerCase() === '' ? d : d.first_name.toLowerCase().includes(search);
              }).map(d => <>
                <tr key={d.id}>
                  <th>{d.id}</th>
                  <td>{d.first_name}</td>
                  <td>{d.last_name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                </tr>

              </>)
            }
            {/* row 1 */}



          </tbody>
        </table>
      </div>


    </div>
  );
}

export default App;
