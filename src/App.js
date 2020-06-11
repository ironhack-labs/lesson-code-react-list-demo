import React from 'react';
import './App.css';

// example: iterating over an array of strings
import StudentsList from './components/StudentsList';

// more common way: iteration over an array of objects
import CohortInfo from './components/CohortInfo';

// example of data
const cohorts = [
  {
    id: 'try',
    date: new Date(2019, 9, 21),
    students: [
      { id: 'abc', name: 'Santi', age: 25 },
      { id: 'def', name: 'Becca', age: 25 }
    ]
  },
  {
    id: 'cst',
    date: new Date(2020, 0, 20),
    students: [
      { id: 'ghi', name: 'António', age: 26 },
      { id: 'cde', name: 'Ana', age: 27 }
    ]
  }
];

function App() {
  return (
    <div className='App'>
      <StudentsList />
      <hr />
      <h2>Cohorts list</h2>
      <i>(an example with an array of objects)</i>

      {cohorts.map(cohort => (
        <CohortInfo key={cohort.id} date={cohort.date} students={cohort.students} />
      ))}
    </div>
  );
}

export default App;
