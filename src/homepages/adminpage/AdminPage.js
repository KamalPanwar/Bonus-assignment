import * as React from 'react';
import {useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';
import Imageupload from './ImageUpload';
import Box from '@mui/material/Box';
import styles from "./adminpage.module.css"

export default function AdminPage() { 
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const[answer,setAnswer]=useState("")
  const [questions, setQuestions] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    const newQuestion=[]
    setQuestions([...questions, newQuestion]);

  }
  

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = () => {
    console.log(value)
    console.log(answer.toLocaleString())
     if (value === answer.toLocaleString()) {
      setHelperText('Corect');
      setError(false);
    } else if (value !== answer.toLocaleString()) {
      setHelperText('wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (<> <div className={styles.question}>
        <div>
     <Container  onSubmit={handleClick}
       sx={{display:'flex',
       flexDirection:'column'}}>
    <TextField id="outlined-basic" label="Enter Question" variant="outlined"
     value={question}
     onChange={(event) => setQuestion(event.target.value)} />
    <TextField id="standard-basic" label="option 1" value={option1} variant="standard" 
    onChange={(event) => setOption1(event.target.value)}/>
    <TextField id="standard-basic" label="option 2"  value={option2} variant="standard" 
    onChange={(event) => setOption2(event.target.value)}/>
   <TextField id="standard-basic" label=" option 3" value={option3} variant="standard" 
   onChange={(event) => setOption3(event.target.value)}/>
   <TextField id="standard-basic" label=" option 4"  value={option4} variant="standard" 
   onChange={(event) => setOption4(event.target.value)}/>
   <TextField id="standard-basic" label=" Answer"  value={answer} variant="standard" 
   onChange={(event) => setAnswer(event.target.value)}/>
   <Button onClick={handleClick} >Add Question</Button>
    </Container>
    </div>
    <div>
    <Box
      sx={{
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        width: 200,
        height: 200,
        backgroundColor: 'gray',
        '&:hover': {
          
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >  <Imageupload/> </Box></div>
    </div>
   {questions.map((event)=>(<form  >
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
     <FormLabel id="demo-error-radios">{question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name={value}
          onChange={handleRadioChange}
        >
        <FormControlLabel value={option1.toLocaleString()} control={<Radio />} label={option1}/>  
         <FormControlLabel value={option2.toLocaleString()} control={<Radio />} label={option2} />
         <FormControlLabel value={option3.toLocaleString()} control={<Radio />} label={option3} />
         <FormControlLabel value={option4.toLocaleString()} control={<Radio />} label={option4}/> 
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} onClick={handleSubmit} variant="outlined">
         Check Answer
        </Button>
      </FormControl>
    </form>))}  
       
    </>
  );
}