export default function ScanditFlutter({ iconClass='' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
    >
      <path fill="transparent" d="M0 0h24v24H0z" opacity=".01" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m13.125 19.995-4.318-4.29 2.386-2.428 6.732 6.718h-4.8Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m8.753 15.708 4.28-4.28h4.812l-6.658 6.659-2.434-2.379ZM5.048 11.975l2.43 2.428L17.845 4.037h-4.837l-7.96 7.938Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
