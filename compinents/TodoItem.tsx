'use client'

import Link from "next/link"
import STYLE from "../constants/style"

export default function TodoItem({ id, index, title, done, deleteTask, toggleTask }
    : {
        id: string
        index: number
        title: string
        done: boolean
        deleteTask: (id: string) => void
        toggleTask: (id: string, done: boolean) => void
    }
) {

    return (
        <li key={id}>
            {index + 1}. {title} {done ? "✅" : "❌"}
            <button className={STYLE}
                onClick={() => deleteTask(id)}
            > x </button>
            <input id={id}
                type="checkbox"
                className="cursor-pointer peer"
                defaultChecked={done}
                onChange={e => toggleTask(id, e.target.checked)}
            />

            <Link
                className="border-2 border-black mx-1 p-1"
                href={{
                    pathname: '../../../simple/edit',
                    query: { id, title },
                }}>
                Edit
            </Link>

        </li>
    )
}