let counter=0
function addRow() {
  counter++
  $('tbody').append(`<tr>
    <td><button type="button" class="btnDel btn btn-danger me-3"><i class="bi bi-trash"></i>Delete</button><button
          type="button" class="copyBtn btn btn-primary"><i class="bi bi-files"></i>clone</button></td>
    <td><input type="text" class="form-control" id="validationCustom01" >
        <div class="valid-feedback"></td>
          <td><input type="text" class="form-control" id="validationCustom01" >
        <div class="valid-feedback"></td>
        <td><div class="form-check form-check-inline">
          <input class="undisableCheck form-check-input" type="radio" name="inlineRadioOptions${counter}"  value="option2">
          <label class="form-check-label" for="inlineRadio1">New</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="undisableCheck form-check-input" type="radio" name="inlineRadioOptions${counter}"  value="option2">
          <label class="form-check-label" for="inlineRadio2">In progress</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="checkRadio form-check-input" type="radio" name="inlineRadioOptions${counter}"value="option3" >
          <label class="form-check-label" for="inlineRadio2">Confrimed</label>
        </div></td>

    </tr>`) 
    $("label.form-label1").text(`There is ${rowCount=$("#tbUser tr").length-1} row in table`)
   
}

$("#tbUser").on('click', '.btnDel', function () {
       $(this).closest('tr').remove();
 $("label.form-label1").text(`There is ${rowCount=$("#tbUser tr").length-1} row in table`)
 $("label.form-label2").text(`There is ${rowCount=$('input[value=option2]:checked').length} notconfirmed`)
});

$("#tbUser").on('click', '.copyBtn', function () {
  $(this).closest('tr').clone().insertAfter($(this).closest('tr'))
  $("label.form-label1").text(`There is ${rowCount=$("#tbUser tr").length-1} row in table`)
  $("label.form-label2").text(`There is ${rowCount=$('input[value=option2]:checked').length} notconfirmed`)
});


$("#tbUser").on('click', '.checkRadio', function (e) {
  let getTr=$(this).closest('tr')
  let inputs=$('input[type="text"]')
  //console.log(getTr.find(inputs))
  if ( e.target.checked) {
    getTr.find(inputs)[0].disabled=true
    getTr.find(inputs)[1].disabled=true
  }
  $("label.form-label2").text(`There is ${rowCount=$('input[value=option2]:checked').length} notconfirmed`)
  });
  
  $("#tbUser").on('click', '.undisableCheck', function (e) {
  let getTr=$(this).closest('tr')
  let inputs=$('input[type="text"]')
  if ( e.target.checked ) {
    getTr.find(inputs)[0].disabled=false
    getTr.find(inputs)[1].disabled=false
  }
  $("label.form-label2").text(`There is ${rowCount=$('input[value=option2]:checked').length} notconfirmed`)
  });
