
type userPhotoProps = {
    params: {
        id: number;
        photo_id: number;
    }
}
export default function UserPhotoDetails({params: {id, photo_id}}: userPhotoProps) {

    return (
        <div>UserPhotoDetails - with user id = {id} and photo id = {photo_id}</div>
    )
}