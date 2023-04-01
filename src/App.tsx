import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Урок №1
import { FirstLesson } from "./#1 - components/1. controlled-component/Simple";

// Урок №2
import OnOff from "./#2 - hooks/useState/onOff";

// Урок №3
import { Uncontrolled_Rating } from "./#1 - components/2. uncontrolled-component/rating/Rating";

// Урок №4
import { Rating_Callback } from "./#1 - components/3. callback/rating/Rating";
import Accordion_Callback from "./#1 - components/3. callback/accordion/Accordion";

// Урок №5 (uncontrolled и controlled input)
import { WatchValueUncontrolledInput } from "./#3 - input/uncontrolled-input/WatchValuInput";
import { GetValueUncontrolledByButton } from "./#3 - input/uncontrolled-input/GetValueByButton";
import { UncontrolledInput } from "./#3 - input/uncontrolled-input/UncontrolledInput";

import { ControlledSelect } from "./#3 - input/controlled-input/ControlledSelect";
import { ControlledInput } from "./#3 - input/controlled-input/ControlledInput";
import { ControlledCheckbox } from "./#3 - input/controlled-input/ControlledCheckbox";

import { MenuCollapsedMode } from "./#4 - array/Menu";
import { MadeChanging, UserUncollapsedMode } from "./#4 - array/UserCollapse";
import { Accordion } from "./#4 - array/Accordion";

function App() {
  return (
    <div className="App">
      <UncontrolledInput />
      <WatchValueUncontrolledInput />
      <GetValueUncontrolledByButton />

      <ControlledInput />
      <ControlledCheckbox />
      <ControlledSelect />

      <MenuCollapsedMode />
      <UserUncollapsedMode />
      <MadeChanging />
    </div>
  );
}

export default App;
