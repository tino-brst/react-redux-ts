export type Todo = {
  readonly id: string
  readonly title: string
  readonly completed: boolean
}

export enum Filter {
  all = 'all',
  complete = 'complete',
  incomplete = 'incomplete',
}
