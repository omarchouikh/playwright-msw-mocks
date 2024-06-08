// handlers.ts
import { http, delay, HttpResponse } from 'msw';

export default [
    http.get('*/**/api/v1/fruits', async () => {
        await delay(500);
        return HttpResponse.json(
            [
                {
                    name: '93 93 93',
                    id: 93,
                }
            ],
            {
                status: 200,
            },
        );
    }),
];