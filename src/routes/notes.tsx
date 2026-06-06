import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/notes")({
    component: NotesPage,
})

function NotesPage() {
    return <h1>Notes</h1>
}
