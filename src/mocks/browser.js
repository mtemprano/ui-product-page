import { setupWorker } from "msw"
import { handlers } from "./serverHandlers"

// Development mock for when deployed env is unstable
export const worker = setupWorker(...handlers)
