const SocialLinks = () => {
  return (
    <nav className="mt-7">
      <ul className="flex flex-wrap gap-x-6 gap-y-4 md:justify-between md:gap-0">
        <li>
          <SocialButton
            href="https://whatsapp.com"
            title="WhatsApp"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.642 12.1115C9.607 14.0775 12.096 15.3295 13.577 13.8555L13.936 13.4965C14.415 13.0185 14.348 12.2265 13.792 11.8405C13.442 11.5965 13.066 11.3345 12.65 11.0425C12.22 10.7405 11.63 10.7875 11.257 11.1575L10.851 11.5605C10.348 11.2415 9.85 10.8325 9.388 10.3705L9.386 10.3685C8.924 9.90654 8.515 9.40854 8.196 8.90554L8.599 8.49954C8.97 8.12654 9.016 7.53654 8.714 7.10654C8.421 6.69054 8.159 6.31454 7.916 5.96454C7.53 5.40954 6.738 5.34254 6.26 5.82054L5.901 6.17954C4.427 7.66054 5.679 10.1485 7.644 12.1145M15.96 3.76254C14.314 2.11554 12.125 1.20754 9.793 1.20654C4.986 1.20654 1.075 5.11554 1.074 9.92054C1.072 11.4495 1.473 12.9525 2.237 14.2775L1 18.7935L5.622 17.5815C6.901 18.2775 8.333 18.6425 9.789 18.6425H9.793C14.598 18.6425 18.509 14.7325 18.511 9.92754C18.512 7.59954 17.606 5.41054 15.96 3.76254Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </li>

        <li>
          <SocialButton
            href="https://instagram.com"
            title="Instagram"
            icon={
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.51172 1H14.5117C17.2731 1 19.5117 3.23858 19.5117 6V14C19.5117 16.7614 17.2731 19 14.5117 19H6.51172C3.7503 19 1.51172 16.7614 1.51172 14V6C1.51172 3.23858 3.7503 1 6.51172 1ZM6.51172 1V4M9.51172 4V1M19.5117 9H13.9695M7.05366 9H1.51172M15.511 4.75C15.3729 4.75018 15.261 4.86231 15.261 5.00051C15.2611 5.1387 15.3732 5.25068 15.5114 5.25068C15.6496 5.25068 15.7616 5.1387 15.7617 5.00051C15.7618 4.86231 15.6492 4.75018 15.511 4.75ZM14.1117 10C14.1117 11.9882 12.4999 13.6 10.5117 13.6C8.52349 13.6 6.91172 11.9882 6.91172 10C6.91172 8.01177 8.52349 6.4 10.5117 6.4C12.4999 6.4 14.1117 8.01177 14.1117 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </li>

        <li>
          <SocialButton
            href="https://facebook.com"
            title="Facebook"
            icon={
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3117 14H14.6783C14.9227 14 15.1313 13.8233 15.1715 13.5822L15.5048 11.5822C15.529 11.4372 15.4881 11.289 15.3931 11.1768C15.2981 11.0647 15.1586 11 15.0116 11H12.1397V9C12.1397 8.44772 12.5874 8 13.1397 8H14.6397C14.9159 8 15.1397 7.77614 15.1397 7.5V5.5C15.1397 5.22386 14.9159 5 14.6397 5H12.8117C10.6026 5 8.81172 6.79086 8.81172 9V11H6.51172C6.23558 11 6.01172 11.2239 6.01172 11.5V13.5C6.01172 13.7761 6.23558 14 6.51172 14H8.81172V19H5.51172C3.30258 19 1.51172 17.2091 1.51172 15V5C1.51172 2.79086 3.30258 1 5.51172 1H15.5117C17.7209 1 19.5117 2.79086 19.5117 5V15C19.5117 17.2091 17.7209 19 15.5117 19H12.3117V14Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </li>

        <li>
          <SocialButton
            href="https://linkedin.com"
            title="LinkedIn"
            icon={
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.63172 9.1V14.5M10.2307 14.5V11.35C10.2307 10.107 11.2377 9.1 12.4807 9.1C13.7237 9.1 14.7307 10.107 14.7307 11.35V14.5M6.62972 5.838C6.50572 5.838 6.40472 5.939 6.40572 6.063M6.01172 1H15.0157C17.4987 1 19.5117 3.013 19.5117 5.496V14.505C19.5117 16.987 17.4987 19 15.0157 19H6.00772C3.52472 19 1.51172 16.987 1.51172 14.504V5.5C1.51172 3.015 3.52672 1 6.01172 1Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </li>

        <li>
          <SocialButton
            href="https://x.com"
            title="X"
            icon={
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1237 8.652L7.80072 4.6H2.71172L5.18972 8.91L1.51172 15.4H6.31372L14.4347 1H19.5117L13.5877 11.475V11.496L17.6947 19H12.6167L8.52072 11.486"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </li>
      </ul>
    </nav>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  title?: string;
}

const SocialButton = ({ href, icon, title }: SocialButtonProps) => {
  return (
    <a
      href={href}
      className="bg-UDR inline-flex size-9.5 items-center justify-center rounded-xl text-white"
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default SocialLinks;
