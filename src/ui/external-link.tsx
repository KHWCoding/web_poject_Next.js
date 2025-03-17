import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const ExternalLink = ({ children, href, }: {children: React.ReactNode; href: string; }) => {
    return (
        <a href={href} className="inline-flex italic px-3.5 py-2 text-xl font-medium text-gray-200 no-underline bg-blue-400 rounded-lg gap-x-2 hover:bg-blue-200 hover:text-white">
            <div>{children}</div>
            <ArrowRightIcon className="block w-4" />
        </a>
    );
}