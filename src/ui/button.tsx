import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button {...rest}
        className={clsx('flex h-10 items-center rounded-lg bg-blue-400 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-bisible:outline-offset-2 focus-visibe:outline-blue-400 actvie:bg-blue-500 aria-disbaled:cursor-not-allowed aria-disabled:opacity-50', className,
        )}
        >
            {children}
        </button>
    );
}