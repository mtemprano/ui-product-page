import { rest } from "msw"
import { setupServer } from "msw/node"
import { handlers } from "../serverHandlers"

// This will allow to use the same handlers in testing and in a development server
const server = setupServer(...handlers)

export { server, rest }
