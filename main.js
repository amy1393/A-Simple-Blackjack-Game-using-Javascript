let me = {
    'name': 'Rinku',
    'outputMe': outputMe
    }
  
  function outputMe(){
    console.log(this);
  }
  
  me.outputMe();
  outputMe();