import "./AsideRight.css"
import { UserPlus, FolderSimplePlus, ListDashes, MagnifyingGlass, Chat, ClipboardText, Microphone, MicrophoneSlash, BugBeetle } from "phosphor-react"
import { useState } from "react";
const AsideRight = () => {
    const [microphoneON, setmicrophoneON]=useState(true)
    return (
        <div className="containerRight">
            <div className="menu-social">
                Social
                <div className="menu-icons">
                    <UserPlus size={24} />
                    <FolderSimplePlus size={24} />
                    <ListDashes size={24} />
                    <MagnifyingGlass size={24} />
                 </div>
            </div>
            <div className="right-footer">
                <div className="footer-icons">
                    <Chat size={24} />
                </div>
                <div className="footer-icons">
                    <ClipboardText size={24} />
                </div>
                <div onClick={()=>setmicrophoneON(!microphoneON)} className="footer-icons">
                    {
                        microphoneON == true
                        ?
                        <Microphone size={24} />
                        :
                        <MicrophoneSlash size={24} />
                    }
                </div>
                <div className="footer-icons">
                    V12.9
                </div>
                <div className="footer-icons">
                    <BugBeetle size={24} />
                </div>
            </div>
        </div>
    );
}
 
export default AsideRight;