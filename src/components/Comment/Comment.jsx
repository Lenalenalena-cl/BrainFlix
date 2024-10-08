import "./Comment.scss";


const Comment = ({name, comment, timestamp}) => {

    const formattedDate = new Date(timestamp).toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric" })

    return (
        <li className="comments__item">

                <div className="comments__profile-pic--grey"></div>
                
                <div className="comments__item-details">
                    <div className="comments__item-info">
                        <p className="comments__item-name">{name}</p>
                        <p className="comments__item-date">{formattedDate}</p>
                    </div>
                    <p className="comments__item-text">{comment}</p>
                </div>

        </li>
    )
}

export default Comment;