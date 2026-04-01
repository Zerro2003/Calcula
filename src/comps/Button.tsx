export default function Button(props: { value: string; onClick?: () => void }) {
  return <button onClick={props.onClick}>{props.value}</button>;
}
