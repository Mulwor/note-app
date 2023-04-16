type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: number) => void
}

export function Star(props: StarPropsType) {
    return (
      <span onClick={()=> {props.setValue(props.value)}}>
        {props.selected ? <b>star </b> : "star "}
      </span>
)}