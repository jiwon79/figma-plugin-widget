interface IconFileProps {
  className?: string;
}

export function IconFile({ className }: IconFileProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M57 35H74.5147L57 17.4853V35ZM51 37V16H26C24.9528 16 24.04 16.8745 24.04 18L24 82L24 82.0014C24.0008 83.1263 24.9132 84 25.96 84H74C75.0863 84 76 83.0863 76 82V41H55C52.7909 41 51 39.2091 51 37ZM18 82L18.04 18C18.04 13.6 21.6 10 26 10H57.5858C57.851 10 58.1054 10.1054 58.2929 10.2929L81.7071 33.7071C81.8946 33.8946 82 34.149 82 34.4142V82C82 86.4 78.4 90 74 90H25.96C21.56 90 18 86.4 18 82Z"
        fill="currentColor"
      />
    </svg>
  );
}
