import styles from "./WidgetUser.module.css";
import { useEffect, useState } from "react";

const WidgetUser = ({ data, index, allInfo, showInfo }) => {
    const {
        phone,
        name,
        nickname,
        email,
        position,
        photo,
    } = data;
    const [showUserInfo, setShowUserInfo] =useState(false);

    useEffect(() => {
        if (!showUserInfo) {
            showInfo(false)
        }
    }, [showInfo, showUserInfo]);

    const buttonClickHandler = () => {
        setShowUserInfo(true);
        showInfo(index);
    }

    return (
        <div className={ `${ styles["widget-user"] } ${ allInfo ? styles["widget-user_a"] : "" }` }>
            {
                allInfo
                    ? (
                        <div className={ styles["widget-user__info"] }>
                            <div className={ styles["widget-user__info__header"] }>
                                <img src={ require(`../assets/images/${ photo }`) } alt="user-img"/>
                                <h2>{ name }</h2>
                                <p>{ position }</p>
                                <button className={ styles["widget-user__info__close"] }
                                        onClick={ () => showInfo(false) }
                                >
                                    &times;
                                </button>
                            </div>
                            <div className={ styles["widget-user__info__body"] }>
                                <div>
                                    <span>Phone</span>
                                    <p>{phone}</p>
                                </div>
                                <div>
                                    <span>URL</span>
                                    <a href='/' target='_blank' rel="noreferrer">https://example.com</a>
                                </div>
                                <div>
                                    <span>Email</span>
                                    <a href={ `mailto:${email}` } target='_blank' rel="noreferrer">https://example.com</a>
                                </div>
                            </div>
                            <div className={ styles["widget-user__info__footer"] }>
                                <button className='btn__primary btn without-responsive'>Send message</button>
                            </div>
                        </div>
                    )
                    : (
                        <>
                            <div className={ styles["widget-user__left"] }>
                                <div className={ styles["widget-user__image"] }>
                                    <img src={ require(`../assets/images/${ photo }`) } alt="user-img"/>
                                </div>
                                <div className={ styles["widget-user__name"] }>
                                    <h2>{ name }</h2>
                                    <p>{ nickname }</p>
                                </div>
                            </div>
                            <div className={ styles["widget-user__more"] }>
                                <button className="view-all btn without__responsive"
                                        onClick={ buttonClickHandler }>View
                                </button>
                            </div>
                        </>
                    )
            }
        </div>
    );
};

export default WidgetUser;