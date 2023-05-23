export const Queque = () => {
  let items = {}
  let rear = 0
  let front = 0

  const isEmpty = () => rear - front <= 0

  const peek = () => (isEmpty() ? null : items[front])

  const enqueque = (element) => {
    items[rear] = element
    rear++
  }

  const dequeque = () => {
    delete items[front]
    front++
    if (isEmpty()) {
      front = 0
      rear = 0
    }
  }

  return {
    enqueque,
    dequeque,
    isEmpty,
    peek
  }
}
