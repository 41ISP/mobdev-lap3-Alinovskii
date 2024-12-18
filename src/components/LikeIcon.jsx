import './LikeIcon.css'

const LikeIcon = ({onImgClick, isLiked}) => {
 
    const handleClick = () => {
        onImgClick();
    }

    return(
    <div className="like">
        <img onClick={handleClick} className={`like__icon ${isLiked ? " like__icon--liked" : "like__icon--unliked"}`}></img>
    </div>
    
 )
}

export default LikeIcon;