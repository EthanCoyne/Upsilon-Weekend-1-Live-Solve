$(function(){
  console.log('jQuery is loaded correctly!!!');
  $('#newEmployeeForm').on('submit', function(event){
    event.preventDefault(); // stop page from reloading and redirecting
    console.log('Form has been submitted!!');

    var newEmployeeArray = $(this).serializeArray(); // get the information from the form into an array
    // console.log(newEmployee);

    var newEmployeeObject = {};

// loop through all the input properties in the array to make a single object
    for(var i =0; i < newEmployeeArray.length; i++){
      var inputFieldName = newEmployeeArray[i].name;
      var inputFieldValue = newEmployeeArray[i].value;
      newEmployeeObject[inputFieldName] = inputFieldValue;
    }
    console.log(newEmployeeObject);

  var newRow =   '<tr>' +
      '<td>' + newEmployeeObject.firstName + '</td>' +
      '<td>' + newEmployeeObject.lastName + '</td>' +
      '<td>' + newEmployeeObject.number + '</td>' +
      '<td>' + newEmployeeObject.title + '</td>' +
      '<td>' + newEmployeeObject.salary + '</td>' +
    '</tr>';

    $('#employeesTable').append(newRow)
  });
});
