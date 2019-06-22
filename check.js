function check(form) {

  if(form.userid.value == "isaiah" && form.pwd.value == "future" or
  form.userid.value == "princeton" && form.pwd.value == "2020" or
  form.userid.value == "cornell" && form.pwd.value == "2020" or
  form.userid.value == "carnegie mellon" && form.pwd.value == "2020" or
  form.userid.value == "georgia tech" && form.pwd.value == "2020" or
  form.userid.value == "berkely" && form.pwd.value == "2020")  {
    return true;
  }
  else
  {
    alert("Error Password or Username")
    return false;
  }
}

check(form);
