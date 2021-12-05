interface Props {
  onClick: React.MouseEventHandler<HTMLElement>
}

const Button : React.FC<Props> = ({ onClick }) => <button onClick={onClick}>Hola</button>

export default Button;
