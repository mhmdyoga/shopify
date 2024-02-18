interface CustomButtonProps {
    title?: string
    onClick?: () => void
    type?: "button" | "submit" | "reset"
    style?: string
    disabled?: boolean
    href: string
}