import FriendList from "./Components/FriendList";
import AccountInfo from "./Components/AccountInfo";

import "./AsideRight.css"

const AsideRight = () => {

    return (
        <div className="containerRight">
            <AccountInfo />
            <FriendList />
        </div>
    );
}
 
export default AsideRight;