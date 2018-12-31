
function first(){
    // Simulate a code delay
    setTimeout( function(){
      console.log(1);
    }, 500 );
  }
  function second(){
    console.log(2);
  }
  first();
  second();


  /**
   * Created this method which accepts one param
   * @param {} subject 
   * @param {} callback
   */
  function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }

  //type 1 callback
  doHomework('math', function() {
    console.log('Finished my homework');
  });


  function myCallbackMethod()
  {
    console.log('Finished my homework method');
  }

  //type 2 callback
  doHomework('math', myCallbackMethod);
