import React, {useState} from "react";

const Tabs =({tabsProp})=>{

    const [content, setContent] = useState(tabsProp[0].content);

    return (
        <div>
            <ul>
                {tabsProp.map((tab)=>
                <li onClick={()=>setContent(tab.content)}>
                    {tab.title}
                </li>
                )}
            </ul>
            <p>
                {content}
            </p>
        </div>
    )
}

export default Tabs;