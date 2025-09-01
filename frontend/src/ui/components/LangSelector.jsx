import { LANG_VERSIONS } from "../constants";

const languages = Object.entries(LANG_VERSIONS);

const LangSelector = ({language, onSelect}) => {
    return (
        <div>
            <select 
                id="lang_list"
                value={language} 
                onChange={(e) => onSelect(e.target.value)}
            >
                {languages.map(([language, version]) => (
                    <option key={language} value={language}>
                        {language} ({version})
                    </option>
                ))}
            </select>
        </div>
    )
}

export default LangSelector;