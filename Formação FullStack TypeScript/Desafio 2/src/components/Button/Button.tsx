import "./Button.css";

interface ButtonLogin {
  onClick: () => void;
}

export const Button = ({ onClick }: ButtonLogin) => {
  return (
    <button className="button" onClick={onClick}>
      Login
    </button>
  );
};
