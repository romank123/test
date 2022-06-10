import $ from 'jquery'
window.bootstrap = require('bootstrap')

$(document).ready(function () {

  let modal = new bootstrap.Modal(document.getElementById('staticBackdrop'))

  $('.btn-login').click(function () {
    modal.show()
  })

  $('form').submit(function (event) {
    event.preventDefault()
    let user = $('input#user').val()
    if (user) {
      $('.btn-login').remove()
      $('.btn-wrapper').append(`<span style="color: white">${user}</span>`)
      getUsdCourse()
      modal.hide()
    }
  })

  function getUsdCourse() {
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: 'https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off',
      success: function (data) {
        $('.btn-wrapper').append(`<p class="mb-0" style="color: white; margin: 0 15px">курс 1$ = ${data.cbrf.data[0][0]}р.</p>`)
      }
    })
  }

  function getUsdCourseXML() {
    $.ajax({
      type: 'POST',
      dataType: 'xml',
      url: 'https://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=01/06/2022&date_req2=01/06/2022&VAL_NM_RQ=R01235',
      success: function (data) {
        let xml = $(data)
        let title = xml.find('Value')
        $('.btn-wrapper').append(`<p class="mb-0" style="color: white; margin: 0 15px">курс 1$ = ${title.text()}р.</p>`)
      }
    })
  }
})
