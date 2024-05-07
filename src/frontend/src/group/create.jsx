import React, { useState } from "react";
import "../App.css";

import Header from '../header/header';

const GroupCreate = () => {
    const [groupName, setGroupName] = useState("");
    const [members, setMembers] = useState([]);

    const handleGroupNameChange = (event) => {
        setGroupName(event.target.value);
    };

    const handleMemberChange = (index, event) => {
        const newMembers = [...members];
        newMembers[index] = event.target.value;
        setMembers(newMembers);
    };

    const handleAddMember = () => {
        setMembers([...members, ""]);
    };

    const handleRemoveMember = (index) => {
        const newMembers = [...members];
        newMembers.splice(index, 1);
        setMembers(newMembers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // フォームの送信処理
        console.log("Group Name:", groupName);
        console.log("Members:", members);
        // ここに実際の送信処理を追加
    };

    return (
        <div className="main_div">
            <Header/>
            <div className="sub_div">
            <h2>グループ作成</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>グループ名:</label>
                    <input
                        type="text"
                        value={groupName}
                        onChange={handleGroupNameChange}
                        required
                    />
                </div>
                <div>
                    <label>メンバー追加:</label>
                    {members.map((member, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={member}
                                onChange={(e) => handleMemberChange(index, e)}
                                required
                            />
                            <button type="button" onClick={() => handleRemoveMember(index)}>
                                削除
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddMember}>メンバー追加</button>
                </div>
                <button type="submit">作成</button>
            </form>
            </div>
        </div>
    );
};

export default GroupCreate;

