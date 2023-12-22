import { idCreator } from ".";
import type { IBaseElement } from "@/types";
import { elDefaultVar } from "@/components/elements";

export const generateNewEl = <T extends IBaseElement>(attr: T) => {
  return {
    ...attr,
    id: idCreator(),
    gridSpan: 24,
    ...elDefaultVar[attr.type]
  }
}