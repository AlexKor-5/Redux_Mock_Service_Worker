import { rest } from 'msw'
import { v4 as uniqueID } from 'uuid'

export const handlers = [
    rest.get('/todos', (req, res, ctx) => {
        return res(
            ctx.delay(1000),
            ctx.status(200),
            ctx.json([
                {
                    id: uniqueID(),
                    text: 'Clean a room',
                },
                { id: uniqueID(), text: 'Do homework' },
                { id: uniqueID(), text: 'go shopping' },
            ])
        )
    }),
]
