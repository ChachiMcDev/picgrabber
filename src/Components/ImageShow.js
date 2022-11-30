
const ImageShow = ({ url, description, user }) => {

    return (
        <div>
            <img src={url} alt={description} />
            <div>Image taken by: <span style={{ fontWeight: 'bold' }}>{user.first_name} {user.last_name}</span> from <span style={{ fontStyle: 'italic' }}>{user.location ? user.location : 'Unknown'}</span></div>
        </div>
    )
}

export default ImageShow