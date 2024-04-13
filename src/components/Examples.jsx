import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedButton, setSelectedButton] = useState();

  function handleSelect(button) {
    setSelectedButton(button);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedButton === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedButton === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedButton === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedButton === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
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
  );
}