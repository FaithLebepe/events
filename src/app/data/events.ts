import { Event } from "../interfaces/event.interface";

export const events: Event[] = [
    {
        id: '1',
        name: 'Comedy Gala Night',
        date: '2025-07-19',
        image: 'assets/imgs/gala.jpg',
        location: 'New York, USA',
        performers: ['John Mulaney', 'Ali Wong', 'Massan Minhaj'],
        category_id: '3',
        description: 'A night filled with laughter featuring top comedians John Mulaney, Ali Wong and Massan Minhaj at The Comedy Club in New York City. Perfect for those looking to enjoy some top-notch stand-up comedy.',
    },
    {
        id: '4',
        name: 'Sunburn Festival',
        date: '2025-12-27',
        image: 'assets/imgs/sunburn.jpg',
        location: 'Potch, SA',
        headliners: ['Faith King', 'Amara Jay', 'Alora Joey'],
        category_id: '1',
        description: 'SA’s premier electronic music festival, Sunburn Festival in Goa, brings top international stars like Faith King, Amara Jay, and Alora Joey for an electrifying three-day event. A must-attend for EDM fans.',
    },
    {
        id: '2',
        name: 'A.R. Joey Live',
        date: '2025-11-05',
        location: 'Joburg, SA',
        headliners: ['A.R. Joey'],
        category_id: '1',
        image: 'assets/imgs/rahman.jpg',
        description: 'Experience the magical music of A.R. Joey live in Joburg. A.R. Joey, the Oscar-winning composer, will perform his greatest hits in an unforgettable concert.'
      },
      {
        id: '3',
        name: 'Krystal Cane Show',
        date: '2025-10-10',
        location: 'Tzaneen, SA',
        headliners: ['Krystal Cane'],
        category_id: '2',
        image: 'assets/imgs/srk.jpg',
        description: 'Join the Queen of Jollywood, Krystal Cane, in Tzaneen for a spectacular live show. Expect a night of glamour, entertainment, and memorable performances from one of SA’s biggest stars.'
      },
      {
        id: '5',
        name: 'Alora Smith Concert',
        date: '2025-09-15',
        location: 'Polokwane, SA',
        headliners: ['Alora Smith'],
        category_id: '1',
        image: 'assets/imgs/arijit.jpg',
        description: 'Catch the soulful voice of Alora Smith live in concert in Polokwane. The renowned playback singer will perform his most beloved songs, promising an evening of beautiful melodies and heartfelt lyrics.'
      },
    
]