import ChatBot from 'react-simple-chatbot';


function Chatbot() {

  return (
    <>
    
    <ChatBot
  headerTitle="Talk to AOT"
  const 
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger:'4',
    },
    {
      id: '4',
      message: 'So, what you want to know about AOT ???',
      trigger:'5',
    },
    {
        id: '5',
        options: [
          { value: 1, label: 'Admission', trigger: '6' },
          { value: 2, label: 'Placement', trigger: '7' },
          { value: 3, label: 'Fees', trigger: '8' },
        ],
      },
      {
      id: '6',
      message: 'Admission for B.Tech opens from 01.06.24 to 04.07.24 and Admisson for MCA opens from 05.06.24 to 10.07.24 this year',
     trigger:'9'
    },
    {
      id: '7',
      message: 'This year Placement percentage is 141.7% Among all the students of all streams',
      trigger:'9',
    },
    {
      id: '8',
      message: 'Admission fees are 72000/- and every semester fees lies between 45000/- to 55000/-',
      trigger:'9',
    },
    // Do you want to go back or end here 
    {
      id: '9',
      options:[
        {
          value:1, label : "search other fields", trigger:'5'
        },
        {
          value:2, label:"end chat here", trigger:'10'
        }
      ],
    },

    

    {
      id: '10',
      message: "Chat is now getting ended here... , Thanks for your query",
      end: true,
    },
    // {
    //   id : '4',
    //   user: true,
    //   trigger
    // },
    // {
    //   id: '2',
    //   user: true,
    //   trigger: '3',
    // },

  ]}
  floating ={true}
  
/>

    </>
  )
}


export default Chatbot