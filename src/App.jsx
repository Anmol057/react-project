import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/Header/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedButton, setSelectedButton] = useState("Please click a button");

  function handleSelect(button) {
    setSelectedButton(button);
    console.log(selectedButton);
    // Now interesting thing here is our UI shows the correct updated value but console is printing old value of selected Button
    // Reason for this happening is react schedule the execution of components again but before re-execution it completes the
    // current function execution which still contains the old value
  }

  return (
    <div>
      <main>
        <h2>Time to get started!</h2>
        <Header />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            {/* We used an anonymous function here so that handleSelect function
            can be passed with an argument. */}
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
        </section>
        {selectedButton}
      </main>
    </div>
  );
}

export default App;
