import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        fetch('/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                /* Form data */
            }),
        }).then((res) => {
            // Do a fast client-side transition to the already prefetched dashboard page
            if (res.ok) router.push('/')
        })
    }, [])

    useEffect(() => {
        router.prefetch('https://the-creepy-guy.web.app')
    }, [])

    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid Email";
        }
      
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password too short";
        }
      
        return errors;
      };

    return (
        // <form onSubmit={handleSubmit}>
        //   {/* Form fields */}
        //   <button type="submit">Login</button>
        // </form>

        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    className={
                        errors.email && touched.email ? "input-error" : null
                    }
                />
                {/* {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                )} */}
            </div>

            <div className="form-row">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    // value={values.password}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // className={
                    //     errors.password && touched.password ? "input-error" : null
                    // }
                />
                {/* {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                )} */}
            </div>

            <button
                type="submit"
                // className={!(dirty && isValid) ? "disabled-btn" : ""}
                // disabled={!(dirty && isValid)}
            >
                Sign In
            </button>
        </form>

    )
}