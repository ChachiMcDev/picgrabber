import ImageShow from "./ImageShow"
import '../css/ImageList.css'

const ImageList = ({ images }) => {

    if (!images) {
        return
    }

    const renderedImages = images.map(({ id, urls, alt_description, user }) => (
        <div key={id}>
            <ImageShow url={urls.small} description={alt_description} user={user} />
        </div>
    ))


    return (
        <div className="grid-images">
            {renderedImages}

        </div>
    )
}

export default ImageList