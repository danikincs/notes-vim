import { useForm } from "@tanstack/react-form"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/login")({
    component: LoginPage,
})

function LoginPage() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        onSubmit: ({ value }) => {
            console.log(value)
        },
    })
    return (
        <main>
            <h1>Login</h1>
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    form.handleSubmit()
                }}
            >
                <form.Field name="email">
                    {(field) => (
                        <label>
                            Email
                            <input
                                value={field.state.value}
                                onChange={(event) =>
                                    field.handleChange(event.target.value)
                                }
                            />
                        </label>
                    )}
                </form.Field>
                <form.Field name="password">
                    {(field) => (
                        <label>
                            Password
                            <input
                                type="password"
                                value={field.state.value}
                                onChange={(event) =>
                                    field.handleChange(event.target.value)
                                }
                            />
                        </label>
                    )}
                </form.Field>
                <button type="submit">Login</button>
            </form>
        </main>
    )
}
