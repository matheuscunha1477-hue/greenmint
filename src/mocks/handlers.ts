import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/nfts', () => {
    return HttpResponse.json({
      data: [{ id: '1', name: 'GreenMint #1', price: '0.05', image: '/nft.png' }],
      total: 1, page: 1
    })
  }),
  http.get('/api/cart', () => HttpResponse.json({ items: [], subtotal: '0', total: '0' })),
  http.post('/api/session', () => HttpResponse.json({ user: { email: 'teste@teste.com' } })),
]