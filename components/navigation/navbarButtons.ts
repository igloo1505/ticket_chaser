import { NavbarButtonProps } from './navbarButton'

export const navbarButtons: NavbarButtonProps[] = [
    {
        href: "/login",
        label: "Login",
        displayAuth: "unauthenticated",
        displayFunc: (d) => {
            return !d.authenticated
        }
    },
    {
        href: "/admin",
        label: "Admin Login",
        displayAuth: "development",
        displayFunc: (d) => {
            return !d.authenticated && process.env.NODE_ENV === "development"
        }
    },
    {
        href: "/admin/legit",
        label: "Admin",
        displayAuth: "development",
        displayFunc: (d) => {
            return d.authenticated && process.env.NODE_ENV === "development"
        }
    },
]
