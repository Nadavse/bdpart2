$(document).ready(function(){
    var d = new Date();
var numberOfFiles = 1;
     var n = d.getTime();
var uniqueId = function() {
      return 'id-' + n + Math.random().toString(36).substr(2, 6);
    };
$("#id-submission").val (uniqueId);

$("#part1SubmitButtonLoading").hide();

//check if ie and block
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
{
    $('#part1Main').hide();
    $('#part1ieError').show();
};

$('#errorUpload').hide();

// Get payment code from url and enter it to the field
var url_string = window.location.href;
var url = new URL(url_string);
var paymentCode = url.searchParams.get("pcode");
$("#pcode").val(paymentCode);


//redirect + parameters
$('#wf-form-First-part').submit(function() {
          $(document).ajaxSuccess(function(){
                 location.href = '/part2'
      + '?numberOfAdults=' + $('input[name=numberOfAdults]:checked', '#wf-form-First-part').val()
      + '&firstName=' + $('#1st-name').val()
      + '&firstOrSeconed=1'
      + '&firstGender=' + $('#1st-gender').val()
      + '&seconedName=' + $('#2nd-name').val()
      + '&seconedGender=' + $('#2nd-gender').val()
      + '&idSubmission=' + $('#id-submission').val();
            });
    });

//If no redirect link
$(document).ajaxSend(function(){
$('#loadingPart2Text').html('במידה ואינכם מועברים באופן אוטומטי לאחר כמה שניות '
            + '<a href="'
            + '/part2'
      + '?numberOfAdults=' + $('input[name=numberOfAdults]:checked', '#wf-form-First-part').val()
      + '&firstName=' + $('#1st-name').val()
      + '&firstOrSeconed=1'
      + '&firstGender=' + $('#1st-gender').val()
      + '&seconedName=' + $('#2nd-name').val()
      + '&seconedGender=' + $('#2nd-gender').val()
      + '&idSubmission=' + $('#id-submission').val()
      + '">לחצו כאן</a>');
});

// Add file
$("#addFile").click(function (){
  if ( numberOfFiles <= 10) {
    var nextFile = '#file' + (numberOfFiles + 1);
      $(nextFile).fadeIn();
  numberOfFiles++;
  if (numberOfFiles == 10) {
  $('#addFile').fadeOut();
  };
};
});  


//Hide error messages - Number of adults
$('input[name="numberOfAdults"]').change(function (){
      $('#numberOfAdultsError').hide();
});  
//Hide error messages - 1st first Name
$('#1st-name').keyup(function (){
      $('#1st-name-error').hide();
});  
//Hide error messages - 1st Last Name
$('#1st-last-name').keyup(function (){
      $('#1st-last-name-error').hide();
});  
//Hide error messages - 1st age
$('#1st-age').keyup(function (){
      $('#1st-age-error').hide();
});
//Hide error messages - 1st gender
$('#1st-gender').change(function (){
      $('#1st-gender-error').hide();
});
//Hide error messages - 2nd first Name
$('#2nd-name').keyup(function (){
      $('#2nd-name-error').hide();
});  
//Hide error messages - 2nd Last Name
$('#2nd-last-name').keyup(function (){
      $('#2nd-last-name-error').hide();
});  
//Hide error messages - 2nd age
$('#2nd-age').keyup(function (){
      $('#2nd-age-error').hide();
});
//Hide error messages - 2nd gender
$('#2nd-gender').change(function (){
      $('#2nd-gender-error').hide();
});
//Hide error messages - 2nd gender
$('#number-of-children').keyup(function (){
      $('#number-of-children-error').hide();
});
//Hide error messages - cooking
$('input[name="cooking"]').change(function (){
      $('#cooking-error').hide();
});  
//Hide error messages - hosting
$('input[name="hosting"]').change(function (){
      $('#hosting-error').hide();
});
//Hide error messages - sittingTable
$('input[name="sittingTable"]').change(function (){
      $('#sittingTable-error').hide();
});
//Hide error messages - livingTime
$('input[name="livingTime"]').change(function (){
      $('#livingTime-error').hide();
});
//Hide error messages - dira-o-Bait
$('input[name="dira-o-Bait"]').change(function (){
      $('#dira-o-Bait-error').hide();
});
//Hide error messages - floor-number
$('#floor-number').keyup(function (){
      $('#floor-number-error').hide();
});
//Hide error messages - shetach-migrash
$('#shetach-migrash').keyup(function (){
      $('#shetach-migrash-error').hide();
});
//Hide error messages - shetach-migrash
$('#shetach-Banui').keyup(function (){
      $('#shetach-Banui-error').hide();
});
//Hide error messages - bait-boded-or-not
$('input[name="bait-boded-or-not"]').change(function (){
      $('#bait-boded-or-not-error').hide();
});
//Hide error messages - city
$('#city').keyup(function (){
      $('#city-error').hide();
});
//Hide error messages - kivunei-Avir
$('#kivunei-Avir').keyup(function (){
      $('#kivunei-Avir-error').hide();
});
//Hide error messages - kivun-Salon
$('#kivun-Salon').keyup(function (){
      $('#kivun-Salon-error').hide();
});
//Hide error messages - phone
$('#phone').keyup(function (){
      $('#phone-error').hide();
});
//Hide error messages - email
$('#email').keyup(function (){
      $('#email-error').hide();
});
//Hide error messages - file
$("#File-2").on('change', function(){
    if( $("#File-2").val() != '') {
      $("#errorUpload").hide();
  }
  });

// Form validation
$("#SubmitButton1").click(function(){
  $("#SubmitButton1").hide();
$("#part1SubmitButtonLoading").show();
//Number of adults
  if ($('input[name="numberOfAdults"]:checked').length == 0) {
    $('input[name="numberOfAdults"]').focus();
      $('#numberOfAdultsError').show();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//1st first Name
  if( !$('#1st-name').val() ) {
    $('#1st-name-error').show();
  $('#1st-name').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//1st last Name
  if( !$('#1st-last-name').val() ) {
    $('#1st-last-name-error').show();
    $('#1st-last-name').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//1st age
  if( !$('#1st-age').val() ) {
    $('#1st-age-error').show();
  $('#1st-age').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//1st gender
  if( !$('#1st-gender').val() ) {
    $('#1st-gender-error').show();
  $('#1st-gender').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//checking 2nd person
if($("input[name='numberOfAdults']:checked").val() == 2) {
    //2nd first Name
      if( !$('#2nd-name').val() ) {
     $('#2nd-name-error').show();
      $('#2nd-name').focus();
      $("#part1SubmitButtonLoading").hide();
      $("#SubmitButton1").show();
   return;
      };
    //2nd last Name
      if( !$('#2nd-last-name').val() ) {
     $('#2nd-last-name-error').show();
     $('#2nd-last-name').focus();
   $("#part1SubmitButtonLoading").hide();
   $("#SubmitButton1").show();
      return;
        };
    //2nd age
      if( !$('#2nd-age').val() ) {
        $('#2nd-age-error').show();
       $('#2nd-age').focus();
       $("#part1SubmitButtonLoading").hide();
       $("#SubmitButton1").show();
       return;
        };
    //2nd gender
      if( !$('#2nd-gender').val() ) {
         $('#2nd-gender-error').show();
      $('#2nd-gender').focus();
      $("#part1SubmitButtonLoading").hide();
      $("#SubmitButton1").show();
     return;
        };
};

//number-of-children
  if( !$('#number-of-children').val() ) {
    $('#number-of-children-error').show();
  $('#number-of-children').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//Coocking
  if ($('input[name="cooking"]:checked').length == 0) {
    $('input[name="cooking"]').focus();
      $('#cooking-error').show();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//hosting
  if ($('input[name="hosting"]:checked').length == 0) {
    $('input[name="hosting"]').focus();
      $('#hosting-error').show();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//sittingTable
  if ($('input[name="sittingTable"]:checked').length == 0) {
    $('input[name="sittingTable"]').focus();
      $('#sittingTable-error').show();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//livingTime
  if ($('input[name="livingTime"]:checked').length == 0) {
    $('input[name="livingTime"]').focus();
      $('#livingTime-error').show();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//dira-o-Bait
  if ($('input[name="dira-o-Bait"]:checked').length == 0) {
    $('input[name="dira-o-Bait"]').focus();
      $('#dira-o-Bait-error').show();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//checking dira
if($("input[name='dira-o-Bait']:checked").val() == "דירה") {
    //floor-number
      if( !$('#floor-number').val() ) {
     $('#floor-number-error').show();
      $('#floor-number').focus();
      $("#part1SubmitButtonLoading").hide();
      $("#SubmitButton1").show();
   return;
      };
};
//checking bait
if($("input[name='dira-o-Bait']:checked").val() == "בית") {
    //shetach-migrash
      if( !$('#shetach-migrash').val() ) {
     $('#shetach-migrash-error').show();
      $('#shetach-migrash').focus();
      $("#part1SubmitButtonLoading").hide();
      $("#SubmitButton1").show();
   return;
      };
    //shetach-Banui
    if( !$('#shetach-Banui').val() ) {
        $('#shetach-Banui-error').show();
         $('#shetach-Banui').focus();
         $("#part1SubmitButtonLoading").hide();
         $("#SubmitButton1").show();
      return;
         };
    //bait-boded-or-not
    if ($('input[name="bait-boded-or-not"]:checked').length == 0) {
        $('input[name="bait-boded-or-not"]').focus();
        $('#bait-boded-or-not-error').show();
        $("#part1SubmitButtonLoading").hide();
        $("#SubmitButton1").show();
         return;
            };
};
//city
if( !$('#city').val() ) {
    $('#city-error').show();
  $('#city').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//kivunei-Avir
if( !$('#kivunei-Avir').val() ) {
    $('#kivunei-Avir-error').show();
  $('#kivunei-Avir').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//kivun-Salon
if( !$('#kivun-Salon').val() ) {
    $('#kivun-Salon-error').show();
  $('#kivun-Salon').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
// Upload requierd message
//if( !$("#File-2").val() ) {
//    $('#errorUpload').show();
//  $('#File-2').focus();
//  $("#part1SubmitButtonLoading").hide();
//  $("#SubmitButton1").show();
//  return;
//        };
//phone
if( !$('#phone').val() ) {
    $('#phone-error').show();
  $('#phone').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };
//email
if( !$('#email').val() ) {
    $('#email-error').show();
  $('#email').focus();
  $("#part1SubmitButtonLoading").hide();
  $("#SubmitButton1").show();
  return;
        };

 //submit
 $('#submitButton').click();

});  


});