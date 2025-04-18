'use client'

import Link from "next/link"
import STYLE from "../constants/style"

export default function GuitarItem({ id, index, name, brand, price, deleteGuitar, toggleAvailability }:
    {
        id: string
        index: number
        name: string
        brand: string
        price: number
        deleteGuitar: (id: string) => void
        toggleAvailability: (id: string, isAvailable: boolean) => void
    }
) {

    return (
        <li key={id}>
            {index + 1}. {name} - {brand} - ${price}
            <button className={STYLE}
                onClick={() => deleteGuitar(id)}
            > x </button>
            <input id={id}
                type="checkbox"
                className="cursor-pointer peer"
                onChange={e => toggleAvailability(id, e.target.checked)}
            />
            <Link
                className="border-2 border-black mx-1 p-1"
                href={{
                    pathname: '/simple/edit',
                    query: { id, name, brand, price },
                }}
            >
                Edit
            </Link>

        </li>
    )
}
