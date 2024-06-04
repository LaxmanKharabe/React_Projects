export default function Button({ children, mode="filled", Icon, ...props}) {
    let modeClass = `button ${mode}-button icon-button`

    console.log(props);
    return (
      <button className={modeClass} {...props}>
        {
            Icon && <span className="button-icon"><Icon /></span>
        }
        <span>{children}</span>
      </button>
    );
  }