import { idCreator } from ".";
import type { IBaseElement } from "@/types";

export const generateNewEl = <T extends IBaseElement>(attr: T) => {
  return {
    ...attr,
    id: idCreator(),
    gridSpan: 24
  }
}