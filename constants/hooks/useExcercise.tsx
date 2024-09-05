import { useState, useEffect } from "react";
import { defaultSet, SetType } from "../types/types";

export default function useExcercise() {
  // excercise number
  // list of sets
  //
  const [sets, setSets] = useState<SetType[]>([defaultSet]);

  // set up default values for the excercise

  // set up a useEffect to determine when to

  return sets;
}
