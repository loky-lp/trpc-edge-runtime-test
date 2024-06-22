import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from './router'

export default function (first: Request, second: object) {
	console.log(`The function has started`)
	console.log('first', first)
	console.log('second', second)

	console.log(first.url)

	return fetchRequestHandler({
		endpoint: '/trpc',
		req: first,
		router: appRouter,
		createContext: () => ({}),
	})
}

// addEventListener('fetch', (event) => {
// 	return event.respondWith(
// 		fetchRequestHandler({
// 			endpoint: '/trpc',
// 			req: event.request,
// 			router: appRouter,
// 			createContext: () => ({}),
// 		}),
// 	);
// });
