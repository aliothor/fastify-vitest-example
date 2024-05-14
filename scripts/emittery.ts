import Emittery from 'emittery'

interface IEvent {
  move: string
}

class CustomMitt<T = any> extends Emittery<T> {
  constructor() {
    super()
  }

  scale() {
    // @ts-ignore
    this.emit('move', 'foo')
  }
}

const mitt = new CustomMitt<IEvent>()

mitt.on('move', (e) => {
  console.log(e)
})

mitt.scale()
mitt.emit('move', 'foo')
