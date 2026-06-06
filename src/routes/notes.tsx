import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/notes")({
    component: NotesPage,
})

const mockNotes = [
    "Learn tanstack query",
    "Add tankstack query",
    "Build notes app",
]

function NotesPage() {
    const notesQuery = useQuery({
        queryKey: ["notes"],
        queryFn: async () => mockNotes,
    })

    return (
        <main>
            <h1>Notes</h1>
            <ul>
                {notesQuery.data?.map((note) => (
                    <li key={note}>{note}</li>
                ))}
            </ul>
        </main>
    )
}
