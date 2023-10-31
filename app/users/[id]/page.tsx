
type detailsPageProps = {
    params: {id: number}
}

export default function UsersDetailsPage(props: detailsPageProps) {
    // by default, props = { params: { id: 'id_entered_in_the_url' }, searchParams: {} }

    return (
        <div>This is the details for this user {props.params.id}</div>
    )
}