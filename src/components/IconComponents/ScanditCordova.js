export default function ScanditCordova({ iconClass='' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={iconClass}
    >
      <path fill="transparent" d="M0 0h24v24H0z" opacity=".01" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.954 19.333h2.591L20 9.841 16.364 4H7.636L4 9.841l1.455 9.492h2.59l-.181-2.19h1.272l.182 2.19h5.364l.182-2.19h1.272l-.181 2.19ZM13.3 6.921h2.337l1.455 2.92-.727 5.841H7.636l-.727-5.84L8.364 6.92H10.7l-.155 1.095h2.909l-.156-1.095Zm1.065 6.823c-.201 0-.364-.608-.364-1.358 0-.75.163-1.358.364-1.358.2 0 .363.608.363 1.358 0 .75-.162 1.358-.363 1.358Zm-4.955-1.245c0 .75.163 1.358.364 1.358.2 0 .363-.608.363-1.358 0-.75-.162-1.358-.363-1.358-.201 0-.364.608-.364 1.358Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
