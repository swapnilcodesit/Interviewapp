import { Switch } from "@mui/material";
import Javascript from "../components/SubQuestions/Javascript";
import ReactQuestions from "../components/SubQuestions/ReactQuestios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";




const Home = () => {
  const [checked, setChecked] = useState(true);
  const theme = useContext(ThemeContext);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    theme.dispatch({type : "update" , payload : event.target.checked })
  };

  useEffect(()=>{
    
  },[checked])

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Javascript />
      <ReactQuestions />
    </div>
  );
};

export default Home;
