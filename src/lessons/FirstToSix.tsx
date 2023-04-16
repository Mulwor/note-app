import React from "react";
import { ControlledComponent } from "./lesson 1/ControlledComponent";
import { UseState } from "./lesson 2/UseState";
import { UncontrolledRating } from "./lesson 3/Rating";
import { AccordionBody } from "./lesson 4/AccordionBody";
import { GetValueUncontrolledByButton } from "./lesson 5/GetValueByButton";
import { WatchValueUncontrolledInput } from "./lesson 5/WatchValuInput";
import { UncontrolledInput } from "./lesson 5/UncontrolledInput";
import { ControlledCheckbox } from "./lesson 6/Controlled/ControlledCheckbox";
import { ControlledSelect } from "./lesson 6/Controlled/ControlledSelect";
import { ControlledInput} from "./lesson 6/Controlled/ControlledInput";
import { MenuCollapsedMode } from "./lesson 6/Array/Menu";
import { MadeChanging, UserUncollapsedMode } from "./lesson 6/Array/UserCollapse";

function FirstToFive() {
  return (
    <div>
      <h2>Урок №1</h2>
      <ControlledComponent />

      <h2>Урок №2</h2>
      <UseState />

      <h2>Урок №3</h2>
      <UncontrolledRating />

      <h2>Урок №4</h2>
      <AccordionBody />

      <h2>Урок №5</h2>
      <GetValueUncontrolledByButton />
      <UncontrolledInput />
      <WatchValueUncontrolledInput />

      <h2>Урок №6</h2>
      <ControlledCheckbox />
      <ControlledInput />
      <ControlledSelect />

      <h2>Урок №6 - добавление массива</h2>
      <MenuCollapsedMode />
      <MadeChanging />
      <UserUncollapsedMode />
    </div>
  );
}

export default FirstToFive;
