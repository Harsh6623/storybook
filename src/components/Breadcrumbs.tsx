import react from "react";

export interface BreadcrumbItem {
  label: string;
  // href: string;
}

export interface BasicBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BasicBreadcrumbs: React.FC<BasicBreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <button className="text-black-500 hover:underline">
              {item.label}
            </button>
            {index !== items.length - 1 && (
              <svg
                className="w-4 h-4 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10 9.707 6.121a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BasicBreadcrumbs;
