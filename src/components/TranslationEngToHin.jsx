import { useEffect, useState } from "react";
import Translation from './Data.json';

function TranslationEngtoHindi() {
    const [language, setLanguage] = useState("english");
    const [content, setContent] = useState({});

    useEffect(() => {
        if (language === "english") {
            setContent(Translation.english);
        } else if (language === "hindi") {
            setContent(Translation.hindi);
        }
    }, [language]);

    return (
        <div>
            {/* <select value={language} onChange={(e) => { setLanguage(e.target.value) }}>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
            </select> */}

            {/* <h2>{content.Title}</h2>
            <span>{content.Description}</span> */}
        </div>
    );
}

export default TranslationEngtoHindi;
