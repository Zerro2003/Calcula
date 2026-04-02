export default function Button(props: {
  value: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
