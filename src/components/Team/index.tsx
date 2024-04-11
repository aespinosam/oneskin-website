'use client'
const people = [
    {
        name: 'Megan Gallagher',
        role: 'UX/UI Designer',
        imageUrl:
            '/megan.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/megan-gallagher-7b7934201',
        imageStyle: '55% 15%'
    },
    {
        name: 'Carlos Molero',
        role: 'Software Engineer',
        imageUrl:
            '/carlos.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/carlos-molero',
        imageStyle: '55% 45%'
    },
    {
        name: 'Nicolas Munoz',
        role: 'Software Engineer',
        imageUrl: '/nico.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/nicolas-munoz-fidalgo',
        imageStyle: '55% 45%'
    },
    {
        name: 'Andres Espinosa',
        role: 'Software Engineer',
        imageUrl:
            '/andres.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/andresespinosam/',
        imageStyle: '55% 35%'
    },
    // More people...
]

export default function Team() {
    return (
        <div className="bg-white py-24 md:py-32 lg:py-40" id="team">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="aspect-[3/2] w-full rounded-2xl object-cover object-center" style={{ backgroundImage: `url(${person.imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: person.imageStyle, backgroundSize: 'cover' }} />
                            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                            <p className="text-base leading-7 text-gray-600">{person.role}</p>
                            <ul role="list" className="mt-6 flex gap-x-6">
                                <li>
                                    <a target="_blank" href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}