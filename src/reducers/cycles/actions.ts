import { Cycle } from "./reducer";
export enum ActionTypes {
  addNewCycle = "ADD_NEW_CYCLE",
  interruptCurrentCycle = "INTERRUPT_CURRENT_CYCLE",
  markCurrentASFinished = "MARK_CURRENT_AS_FINISHED",
}

export function addNewCyclesAction(newCycle: Cycle) {
  return {
    type: ActionTypes.addNewCycle,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinhesedAction() {
  return {
    type: ActionTypes.markCurrentASFinished,
  };
}
export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.interruptCurrentCycle,
  };
}
