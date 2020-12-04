import type { Filter } from 'app/types'
import { ActiveFilterAction, ActiveFilterActionType } from './types'

export function setActiveFilter(value: Filter): ActiveFilterAction {
  return {
    type: ActiveFilterActionType.setActiveFilter,
    payload: value,
  }
}
