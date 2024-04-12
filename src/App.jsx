import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/Header/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedButton, setSelectedButton] = useState();

  function handleSelect(button) {
    setSelectedButton(button);
    //console.log(selectedButton);
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
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {!selectedButton ? <p>Please select a button</p> : null}
          {selectedButton ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedButton].title}</h3>
              <p>{EXAMPLES[selectedButton].description}</p>
              <pre>
                <code>{EXAMPLES[selectedButton].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
