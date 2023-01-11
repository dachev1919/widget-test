import styles from './Widget.module.css';
import { useSelector } from "react-redux";
import WidgetUser from "./WidgetUser";
import { useState } from "react";

const Widget = () => {
    const users = useSelector((state) => state.users.data);
    const [viewAllUsers, setViewAllUsers] = useState(false);
    const [userId, setUserId] = useState(false);

    const userIdForShow = (index) => {
        if (index) {
            setUserId(index);
        } else {
            setUserId(false);
        }
    }

    return (
        <div className={styles['widget__wrapper']}>
            <div className={styles.widget}>
                <div className={styles['widget__body']}>
                    {
                        users.map((user, index) => {
                            if (userId === index + 1) {
                                return <WidgetUser key={index} data={user} index={index + 1} allInfo={true} showInfo={userIdForShow} />
                            } else if (userId && userId !== index + 1) {
                                return false;
                            }

                            if (!viewAllUsers && users.length > 3) {
                                if (index < 3) {
                                    return <WidgetUser key={index} data={user} index={index + 1} showInfo={userIdForShow} />
                                }
                            } else {
                                return <WidgetUser key={index} data={user} index={index + 1} showInfo={userIdForShow} />
                            }

                            return false;
                        })
                    }
                </div>
                { users.length > 3 && !viewAllUsers && userId === false && (
                    <div className={styles['widget__footer']}>
                        <button className='view-all btn without-responsive' onClick={() => setViewAllUsers(true)}>View all</button>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default Widget;