import { useForm } from "@tanstack/react-form"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/register")({
    component: RegisterPage,
})

function RegisterPage() {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: ({ value }) => {
            console.log(value)
        },
    })

    return (
        <main>
            <h1>Register</h1>

            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    form.handleSubmit()
                }}
            >
                <form.Field name="name">
                    {(field) => (
                        <label>
                            name
                            <input
                                value={field.state.value}
                                onChange={(event) =>
                                    field.handleChange(event.target.value)
                                }
                            />
                        </label>
                    )}
                </form.Field>
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
                <button type="submit">Register</button>
            </form>
        </main>
    )
}
