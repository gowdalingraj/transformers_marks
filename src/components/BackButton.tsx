type BackButtonProps = {
  label: string;
  onClick: () => void;
};

export function BackButton({ label, onClick }: BackButtonProps) {
  return (
    <button className="back-button" type="button" onClick={onClick}>
      <span className="back-button-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span>{label}</span>
    </button>
  );
}
