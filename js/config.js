// Flash config menu

// variables
let product = "flash";
let parameter = "";
let value = "";
let id_string = "";

// functions
function changeLanguageImage(elem) {
  var imageUrl = elem.getAttribute('src');
  document.getElementById('languageimgview').setAttribute('src', imageUrl);
}

// change color image displayed
function changeImage(elem) {
  var imageUrl = elem.getAttribute('image');
  document.getElementById('imgview').setAttribute('src', imageUrl);
}
//document.querySelector('[value="one"]').click();


// send config data as JSON object via serial connection
// JSON format: {"product":{"parameter":"value"}}
//TODO: add touch control
function send_config(elem) {
  let json_data = ""; // string in json format containing the config data
  var id = elem.getAttribute('id'); // id of the pressed download/send_config button
  console.log(id);
  switch (id) {
    case 'upload_btn_forklength':
      parameter = "length";
      if (document.getElementById('335').checked == true) {
        value = "335";
      }
      if (document.getElementById('635').checked == true) {
        value = "635";
      }
      if (document.getElementById('935').checked == true) {
        value = "935";
      }
      if (document.getElementById('1870').checked == true) {
        value = "1870";
      }
      break;
    case 'upload_btn_op_mode':
      parameter = "operation mode";
      if (document.getElementById('inlineRadio_none').checked == true) {
        value = "none";
      }
      if (document.getElementById('inlineRadio_red').checked == true) {
        value = "all red";
      }
      if (document.getElementById('inlineRadio_green').checked == true) {
        value = "all green";
      }
      if (document.getElementById('inlineRadio_run_red_white').checked == true) {
        value = "red_white";
      }


      // show loading spinner
      var spinner_id = "loading_op_mode_div";
      setTimeout(toggle_img(spinner_id), 3000);

      //on success
      setTimeout(toggle_img(spinner_id), 6000);
      //setTimeout(document.getElementById('check_btn_op_mode_div').classList.remove("hidden"),2000);

      // on failure
      //setTimeout(document.getElementById('error_btn_op_mode_div').classList.remove("hidden"),2000);
      break;

    case 'lengthselect_prev':
      console.log("case length_s: ", id);
      rdm_bg();
      break;
    case 'lengthselect_next':
      console.log("case length_m: ", id);
      rdm_bg();

      break;
    default:
      console.log("no case for id: ", id);
      break;
  }


  // JSON creation
  if (json_data != null) {
    json_data = '{"' + product + '":' + '{"' + parameter + '":"' + value + '"}}';
    console.log(json_data);

    // create final json object
    const json_obj = JSON.parse(json_data);
    console.log(json_obj);
  }
}

// TODO: Läuft ohne übergabeparameter mit der id in der funktion, aber so nicht? FRIDO??
function toggle_img(img_id) {
  /*
  console.log("img_id: ", img_id);
  var returnval= document.getElementById(img_id).classList.toggle("hidden");
  console.log("return value:", returnval);
  */
  console.log("toggle image");
  var element = document.getElementById(img_id);
  if (element.style.display === "none") {
    element.style.display = "block";
  }
  else {
    element.style.display === "none";
  }
}



//radnomize background border of carousel to visualize connection status
function rdm_bg() {
  var random = Math.random();
  console.log("rdm: ", random);
  if (random > 0.5) {
    document.getElementById("carousellengthselect").classList.add('carousel-red');
    document.getElementById("carousellengthselect").classList.remove('carousel-green');
  }
  else {
    document.getElementById("carousellengthselect").classList.add('carousel-green');
    document.getElementById("carousellengthselect").classList.remove('carousel-red');
  }
}




function move_arrow(marker_pos) {
  var elem=document.getElementById("marker_arrow_pos");
  if (marker_pos === "0") {
    elem.classList.remove('img-overlay-zero');
    elem.classList.remove('img-overlay-one');
    elem.classList.remove('img-overlay-two');
    elem.classList.remove('img-overlay-three');
    elem.classList.remove('img-overlay-four');
    elem.classList.remove('img-overlay-five');
    elem.classList.add('img-overlay-zero');
  }
  if (marker_pos === "1") {
    elem.classList.remove('img-overlay-zero');
    elem.classList.remove('img-overlay-one');
    elem.classList.remove('img-overlay-two');
    elem.classList.remove('img-overlay-three');
    elem.classList.remove('img-overlay-four');
    elem.classList.remove('img-overlay-five');
    elem.classList.add('img-overlay-one');
  }
  if (marker_pos === "2") {
    elem.classList.remove('img-overlay-zero');
    elem.classList.remove('img-overlay-one');
    elem.classList.remove('img-overlay-two');
    elem.classList.remove('img-overlay-three');
    elem.classList.remove('img-overlay-four');
    elem.classList.remove('img-overlay-five');
    elem.classList.add('img-overlay-two');
  }
  if (marker_pos === "3") {
    elem.classList.remove('img-overlay-zero');
    elem.classList.remove('img-overlay-one');
    elem.classList.remove('img-overlay-two');
    elem.classList.remove('img-overlay-three');
    elem.classList.remove('img-overlay-four');
    elem.classList.remove('img-overlay-five');
    elem.classList.add('img-overlay-three');
  }
  if (marker_pos === "4") {
    elem.classList.remove('img-overlay-zero');
    elem.classList.remove('img-overlay-one');
    elem.classList.remove('img-overlay-two');
    elem.classList.remove('img-overlay-three');
    elem.classList.remove('img-overlay-four');
    elem.classList.remove('img-overlay-five');
    elem.classList.add('img-overlay-four');
  }
  if (marker_pos === "5") {
    elem.classList.remove('img-overlay-zero');
    elem.classList.remove('img-overlay-one');
    elem.classList.remove('img-overlay-two');
    elem.classList.remove('img-overlay-three');
    elem.classList.remove('img-overlay-four');
    elem.classList.remove('img-overlay-five');
    elem.classList.add('img-overlay-five');
  }
}