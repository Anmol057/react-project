import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedButton, setSelectedButton] = useState();

  function handleSelect(button) {
    setSelectedButton(button);
  }

  let tabContent = <p>Please select a button</p>;
  {
    selectedButton
      ? (tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedButton].title}</h3>
            <p>{EXAMPLES[selectedButton].description}</p>
            <pre>
              <code>{EXAMPLES[selectedButton].code}</code>
            </pre>
          </div>
        ))
      : null;
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
