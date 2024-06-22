import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from './router';

export default function(first: object, second: object) {
	console.log(`The function has started`)
	console.log('first', first.constructor.name)
	console.log('second', second.constructor.name)

	return new Response('You are living on the edge')
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
