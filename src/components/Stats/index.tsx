'use client'
const stats = [
    { id: 1, name: 'on our team', value: '4 Members' },
    { id: 2, name: 'working on this project', value: '76 Hours' },
    { id: 3, name: 'of coffee consumed', value: '50+ Cups' },
]

export default function Stats() {
    return (
        <div className="bg-white py-24 sm:py-32" id="stats">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}