import "./Button3D.css";
/**
 * A 3D-style button.
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'success' | 'danger / error'} [props.variant] - Color style of the button; omit for the default orange
 * @param {React.ReactNode} props.children - Button label
 * @param {() => void} [props.onClick] - Runs when the button is clicked
 */
function Button({ variant, children, onClick, type = "button" }) {
	variant = variant?.toLowerCase()
  return (
    <button className={variant ? `btn-3d btn-${variant}` : 'btn-3d'} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
