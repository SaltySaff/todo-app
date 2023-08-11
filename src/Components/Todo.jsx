export default function Todo(props) {
    console.log(props)
    return (
        <li>{props.text}</li>
    )
}

// move state to parent component, it shouldn't be in here