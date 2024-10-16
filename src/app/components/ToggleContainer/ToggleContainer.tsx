
export default function ToggleContainer({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <details className="flex flex-col justify-between w-full">
            <summary>{title}</summary>
            {children}
        </details>
    )
}