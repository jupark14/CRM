import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': '111111',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBasAtPgN_RDTZ56mA8a2HBAqum7KXg6KeQ&usqp=CAU',
    'name': '박지우',
    'department': 'Digital Innovation Lab',
    'rank': 'Manager'
  },
  {
    'id': '222222',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBasAtPgN_RDTZ56mA8a2HBAqum7KXg6KeQ&usqp=CAU',
    'name': '김민석',
    'department': 'Digital Innovation Lab',
    'rank': 'Manager'
  },
  {
    'id': '333333',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBasAtPgN_RDTZ56mA8a2HBAqum7KXg6KeQ&usqp=CAU',
    'name': '윤새하',
    'department': 'Digital Innovation Lab',
    'rank': 'Manager'
  }]

function App() {
  return (
    <div>
      {customers.map(c => {
        return <Customer key={c.id} id={c.id} image={c.image} name={c.name} department={c.department} rank={c.rank} />
      })}
    </div>

  );
}

export default App;
