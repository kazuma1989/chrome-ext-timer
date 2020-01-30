const counter = (function*() {
  let count = 0

  while (true) {
    count += 1
    yield count
  }
})()

setInterval(() => (self as any).postMessage(counter.next().value), 1000)
