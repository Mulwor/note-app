type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.onClick()}}> -- {props.title} --</h3>
    )
}
