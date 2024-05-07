import React, { useState } from "react";
import "../App.css";

import Header from '../header/header';

const PostClient = () => {
    const [inputs, setInputs] = useState([{ id: 1, type: "", value: "", rows: 1, cols: 3 }]);

    const handleInputChange = (id, event) => {
        const { name, value } = event.target;
        const newInputs = inputs.map(input =>
            input.id === id ? { ...input, [name]: value } : input
        );
        setInputs(newInputs);
    };

    const handleFileInputChange = (id, event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUrl = reader.result;
            const newInputs = inputs.map(input =>
                input.id === id ? { ...input, value: imageDataUrl } : input
            );
            setInputs(newInputs);
        };
        reader.readAsDataURL(file);
    };

    const handleAddInput = () => {
        const newId = inputs.length + 1;
        setInputs([...inputs, { id: newId, type: "", value: "", rows: 1, cols: 3 }]);
    };

    const handleRemoveInput = id => {
        if (inputs.length === 1) return; // 最後のフィールドは削除しない
        const newInputs = inputs.filter(input => input.id !== id);
        setInputs(newInputs);
    };

    const handleAddRow = id => {
        const newInputs = inputs.map(input =>
            input.id === id ? { ...input, rows: input.rows + 1 } : input
        );
        setInputs(newInputs);
    };

    const handleAddCol = id => {
        const newInputs = inputs.map(input =>
            input.id === id ? { ...input, cols: input.cols + 1 } : input
        );
        setInputs(newInputs);
    };

    const handleRemoveRow = id => {
        const newInputs = inputs.map(input =>
            input.id === id && input.rows > 1 ? { ...input, rows: input.rows - 1 } : input
        );
        setInputs(newInputs);
    };

    const handleRemoveCol = id => {
        const newInputs = inputs.map(input =>
            input.id === id && input.cols > 1 ? { ...input, cols: input.cols - 1 } : input
        );
        setInputs(newInputs);
    };

    const handleMoveUp = id => {
        const currentIndex = inputs.findIndex(input => input.id === id);
        if (currentIndex === 0) return; // 最初の要素は上に移動できない
        const newInputs = [...inputs];
        const temp = newInputs[currentIndex];
        newInputs[currentIndex] = newInputs[currentIndex - 1];
        newInputs[currentIndex - 1] = temp;
        setInputs(newInputs);
    };

    const handleMoveDown = id => {
        const currentIndex = inputs.findIndex(input => input.id === id);
        if (currentIndex === inputs.length - 1) return; // 最後の要素は下に移動できない
        const newInputs = [...inputs];
        const temp = newInputs[currentIndex];
        newInputs[currentIndex] = newInputs[currentIndex + 1];
        newInputs[currentIndex + 1] = temp;
        setInputs(newInputs);
    };

    const handleSave = () => {
        // ここで入力内容を保存する処理を実行
        console.log(inputs);
    };

    return (
        <div className="main_div">
            <Header />
            <div className="sub_div">
            <h3>タイトル</h3>
            <input type="text"></input>
            {inputs.map(input => (
                <div key={input.id}>
                    <select name="type" value={input.type} onChange={(e) => handleInputChange(input.id, e)}>
                        <option value="">選択してください</option>
                        <option value="大見出し">大見出し</option>
                        <option value="小見出し">小見出し</option>
                        <option value="長文入力フォーム">長文入力フォーム</option>
                        <option value="画像">画像</option>
                        <option value="表">表</option>
                    </select>
                    {input.type === "画像" ? (
                        <div>
                            <input type="file" accept="image/*" onChange={(e) => handleFileInputChange(input.id, e)} />
                            {input.value && <img src={input.value} alt="選択された画像" style={{ maxWidth: "100px" }} />}
                        </div>
                    ) : input.type === "表" ? (
                        <div>
                            <table>
                                <tbody>
                                    {[...Array(input.rows)].map((_, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {[...Array(input.cols)].map((_, colIndex) => (
                                                <td key={colIndex}><input type="text" placeholder={`セル${rowIndex * input.cols + colIndex + 1}`} /></td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <button onClick={() => handleAddRow(input.id)}>行を追加</button>
                                <button onClick={() => handleAddCol(input.id)}>列を追加</button>
                                <button onClick={() => handleRemoveRow(input.id)}>行を削除</button>
                                <button onClick={() => handleRemoveCol(input.id)}>列を削除</button>
                            </div>
                        </div>
                    ) : input.type === "長文入力フォーム" ? (
                        <textarea name="value" value={input.value} onChange={(e) => handleInputChange(input.id, e)} />
                    ) : (
                        <input type="text" name="value" value={input.value} onChange={(e) => handleInputChange(input.id, e)} />
                    )}
                    <button onClick={() => handleMoveUp(input.id)}>↑</button>
                    <button onClick={() => handleMoveDown(input.id)}>↓</button>
                    <button onClick={() => handleRemoveInput(input.id)}>削除</button>
                </div>
            ))}
            <button onClick={handleAddInput}>＋ 追加</button>
            <button onClick={handleSave}>保存</button>
            </div>
        </div>
    );
};

export default PostClient;
