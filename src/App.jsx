import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/Header/TabButton.jsx";

function App() {
  let tabContent = "Please click a button";

  function handleSelect(button) {
    console.log("Hello " + button);
    tabContent = button;
    console.log(tabContent + " clicked");
    // Now here we are updating tabContent value on every button clicked but its value is changed and can be seen in the console but
    // On line 48 in the returned jsx content it stays Same, value is not changing in the UI, Reason is react renders all components
    // once only in the beginnng unless specified again.
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
        {tabContent}
      </main>
    </div>
  );
}

export default App;
