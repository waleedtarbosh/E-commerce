function createData(id, variant, component, className, value) {
  return {
    id,
    variant,
    component,
    className,
    value,
  };
}

export default function dataMediaCard({
  title,
  description,
  button,
  titleClassName,
  descriptionClassName,
  buttonClassName,
}) {
  const data = [
    createData(1, "h5", "div", titleClassName, title),
    createData(2, "body2", "div", descriptionClassName, description),
    createData(3, "button", "button", buttonClassName, button),
  ];
  return data;
}
