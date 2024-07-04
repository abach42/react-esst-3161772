export function Course(props) {
  return (
    <p>
      <strong>{props.title}</strong>&nbsp;
      <mark>{props.author}</mark>
    </p>
  );
}

Course.defaultProps = {
    title: "fallback title",
    author: "fallback title"
}

Course.displayName = "MyCourse";