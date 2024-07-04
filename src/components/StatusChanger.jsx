export function StatusChanger(props) {
  const newStatus = props.statusText;
  const buttoClicked = () => props.onStatusChange(newStatus);

  return (
    <button type="button" onClick={buttoClicked}>
      {newStatus}
    </button>
  );
}
