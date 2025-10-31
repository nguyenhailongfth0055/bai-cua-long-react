import React, { useEffect, useState } from "react";
import ObjectCard from "./components/ObjectCard";
import SubjectCard from "./components/SubjectCard";
import "./App.css";

function App() {
  const [objects, setObjects] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("/objects.json")
      .then(res => res.json())
      .then(data => setObjects(data));

    fetch("/subjects.json")
      .then(res => res.json())
      .then(data => setSubjects(data));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Đại học FPT Aptech</h1>
        <h2>Frontend Web Development with React</h2>
        <p>Duration: 60 minutes | Marks: 15</p>
      </header>

      <section>
        <h2>Should Who Learn Programming in FPT Aptech?</h2>
        <div className="card-container">
          {objects.map(item => (
            <ObjectCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section>
        <h2>What is the Course Program?</h2>
        <div className="card-container">
          {subjects.map(item => (
            <SubjectCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
