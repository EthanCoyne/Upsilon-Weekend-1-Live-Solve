$(function(){
  console.log('jQuery is loaded correctly!!!');
  var totalMonthlySalary = 0;

  $('#employeesTable').on('click', '.deleteButton', function(){
    $(this).parent().parent().remove();
  });

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

// blueprint for employee information to be added to the DOM
  var newRow =   '<tr>' +
      '<td>' + newEmployeeObject.firstName + '</td>' +
      '<td>' + newEmployeeObject.lastName + '</td>' +
      '<td>' + newEmployeeObject.number + '</td>' +
      '<td>' + newEmployeeObject.title + '</td>' +
      '<td>' + newEmployeeObject.salary + '</td>' +
      '<td><button class="deleteButton">Delete</button></td>' +
    '</tr>';

    // append the new employee to the table
    $('#employeesTable').append(newRow)

    //clear form input fields
    $('#newEmployeeForm input[type="text"]').val('');
    $('#newEmployeeForm input[type="number"]').val('');


    //With new employee, divide salary by 12, add to current totalMonthlySalary
    totalMonthlySalary += newEmployeeObject.salary / 12;
    console.log('totalMonthlySalary is ' + totalMonthlySalary);

    // Change the text of totalMonthlySalary to a US dollar amount.
    $('#monthlySalary').text(totalMonthlySalary.toLocaleString('en-us', {style: 'currency', currency: 'USD'}))

  });
});
