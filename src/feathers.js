import feathers from 'feathers'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio'
import io from 'socket.io-client'

const socket = io('http://localhost:3030', { transports: ['websocket'] })

const feathersClient = feathers()
	.configure(hooks())
	.configure(socketio(socket))

export default feathersClient
