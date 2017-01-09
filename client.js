$(function(){
  console.log('jQuery is loaded correctly!!!');
  $('#newEmployeeForm').on('submit', function(event){
    event.preventDefault();
    console.log('Form has been submitted!!');

    var newEmployeeArray = $(this).serializeArray();
    // console.log(newEmployee);

    var newEmployeeObject = {};

    for(var i =0; i < newEmployeeArray.length; i++){
      // console.log(newEmployeeArray[i]);
      var inputFieldName = newEmployeeArray[i].name;
      var inputFieldValue = newEmployeeArray[i].value;
      // console.log('The name of the value ',  i, ' is ', inputFieldName);
      // console.log('The name of the value ',  i, ' is ', inputFieldValue);
      newEmployeeObject[inputFieldName] = inputFieldValue;
    }
    console.log(newEmployeeObject);
  });
});
