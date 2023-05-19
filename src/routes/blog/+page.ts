import type { PageLoad } from './$types';

export const load = (() => {
    return {
        posts: [
            {
                title: '5 Tips to Save Money Booking Your Next Hotel Room',
                continent: 'Europe',
                image: './images/dummy/img1.jpg'
            },
            {
                title: '5 Tips to Save Money Booking Your Next Hotel Room',
                continent: 'Europe',
                image: './images/dummy/img2.jpg'
            },
            {
                title: '5 Tips to Save Money Booking Your Next Hotel Room',
                continent: 'Europe',
                image: './images/dummy/img3.jpg'
            },
            {
                title: '5 Tips to Save Money Booking Your Next Hotel Room',
                continent: 'Europe',
                image: './images/dummy/img4.jpg'
            },
            {
                title: '5 Tips to Save Money Booking Your Next Hotel Room',
                continent: 'Europe',
                image: './images/dummy/img5.jpg'
            },
            {
                title: '5 Tips to Save Money Booking Your Next Hotel Room',
                continent: 'Europe',
                image: './images/dummy/img6.jpg'
            },
        ]
    };
}) satisfies PageLoad;