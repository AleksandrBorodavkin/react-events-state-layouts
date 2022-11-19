export default function IconSwitch({icon, onSwitch}) {
    return (
        <button
            className={'store__btn material-icons'}
            onClick={onSwitch}>
            {icon}
        </button>
    )

}