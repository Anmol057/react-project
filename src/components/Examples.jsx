import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";

export default function Examples() {
  const [selectedButton, setSelectedButton] = useState();

  function handleSelect(button) {
    setSelectedButton(button);
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedButton === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedButton === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedButton === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedButton === "state"}
          onClick={() => handleSelect("state")}
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
    </Section>
  );
}
