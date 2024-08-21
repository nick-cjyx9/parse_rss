import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import Parser from 'rss-parser'

const app = new Hono().basePath('/api')

app.get('/parseRSS', async (c) => {
  const link = c.req.query('link')
  const parser = new Parser({
    headers: {
      'User-Agent': 'Hono.js RSS Parser_via ShimaRSS'
    }
  })
  const feed = await parser.parseURL(link)
  return c.json(feed)
})

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
