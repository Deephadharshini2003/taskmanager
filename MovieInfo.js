export default function Info(props)
{
    return(
        <>
        <h1>User Information</h1>
        <h3>{props.user.name}</h3>
        <h3>{props.user.age}</h3>
        <h3>{props.user.gender}</h3>
        </>
    )
}