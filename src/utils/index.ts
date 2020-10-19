import type { Todo } from 'app/types'

export async function request(resource: '/todos') {
  await sleep(1000)
  switch (resource) {
    case '/todos':
      const todos: Array<Todo> = [
        {
          id: getUniqueId(),
          completed: false,
          title: 'Look into Redux Toolkit',
        },
        {
          id: getUniqueId(),
          completed: false,
          title: 'Refactor using hooks',
        },
        {
          id: getUniqueId(),
          completed: false,
          title: 'Try out io-ts',
        },
      ]
      return todos
  }
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function getUniqueId() {
  return (Math.random() * 1000000).toFixed(0)
}
