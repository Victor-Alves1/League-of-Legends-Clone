import "./AsideRight.css"
import { UserPlus, FolderSimplePlus, ListDashes, MagnifyingGlass, Chat, ClipboardText, Microphone, MicrophoneSlash, BugBeetle } from "phosphor-react"
import { useState } from "react";
const AsideRight = () => {
    const [microphoneON, setmicrophoneON]=useState(true)
    return (
        <div className="containerRight">
            <div className="account-info">
                
            </div>
            <div className="friends-list">
                <div className="menu-social">
                    Social
                    <div className="menu-icons">
                        <UserPlus size={"1.2vw"} weight="fill"/>
                        <FolderSimplePlus size={"1.2vw"} weight="fill"/>
                        <ListDashes size={"1.2vw"} weight="bold"/>
                        <MagnifyingGlass size={"1.2vw"} weight="bold"/>
                     </div>
                </div>
                <div className="right-footer">
                    <div className="footer-icons">
                        <Chat size={"1vw"} weight="fill"/>
                    </div>
                    <div className="footer-icons">
                        <ClipboardText size={"1vw"} weight="fill"/>
                    </div>
                    <div onClick={()=>setmicrophoneON(!microphoneON)} className="footer-icons">
                        {
                            microphoneON == true
                            ?
                            <Microphone size={"1vw"} weight="fill"/>
                            :
                            <MicrophoneSlash size={"1vw"}  weight="fill"/>
                        }
                    </div>
                    <div className="footer-icons">
                        V12.9
                    </div>
                    <div className="footer-icons">
                        <BugBeetle size={"1vw"} weight="fill"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AsideRight;