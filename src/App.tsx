import React from "react";
import "./App.css";

// * Заметка №1
import { FirstLesson } from "./components/1. controlled-component/Simple";

// * Заметка №2
import OnOff from "./hooks/useState/onOff";

// * Заметка №3
import { Uncontrolled_Rating } from "./components/2. uncontrolled-component/rating/Rating";

// * Заметка №4
import { Rating_Callback } from "./components/3. callback/rating/Rating";
import Accordion_Callback from "./components/3. callback/accordion/Accordion";

// * Заметка №5 (uncontrolled и controlled input)
import { WatchValueUncontrolledInput } from "./input/uncontrolled-input/WatchValuInput";
import { GetValueUncontrolledByButton } from "./input/uncontrolled-input/GetValueByButton";
import { UncontrolledInput } from "./input/uncontrolled-input/UncontrolledInput";

import { ControlledInput } from "./input/controlled-input/ControlledInput";
import { ControlledSelect } from "./input/controlled-input/ControlledSelect";
import { ControlledCheckbox } from "./input/controlled-input/ControlledCheckbox";

import { Accordion } from "./array/Accordion";
import { MenuCollapsedMode } from "./array/Menu";
import { MadeChanging } from "./array/UserCollapse";
import { UserUncollapsedMode } from "./array/UserCollapse";


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
