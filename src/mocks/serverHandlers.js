import { rest } from "msw"
import mockedResponse from "./mockedResponse"

const handlers = [
  rest.get("https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json", (req, res, ctx) => {
    return res(ctx.json(mockedResponse))
  }),
]

export { handlers }
