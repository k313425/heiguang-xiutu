jQuery(document).ready(function () {
  
  // list_type
  
  //preselect('北京市');
  //promptinfo();
  jQueryvalidate = jQuery(".registerform").Validform({
    tiptype: 2,
  });
  geoSetup();
  jQuery('#regSubmit').on('click', function () {
    if (jQuery('#Agree').prop('checked') == false) {
      alert('请阅读并同意《黑光数码平台服务协议》');
      return false;
    }
    var that = jQuery('#register-form');
    jQuerydata = new Array();
    jQueryformData = that.serializeArray();
    jQuery.each(jQueryformData, function (k, v) {
      jQuerydata.push(v.name + "=" + v.value);
    });
    jQuery.ajax({
      url: "/site/register",
      type: "POST",
      dataType: "json",
      data: jQuerydata.join("&"),
      success: function (data) {
        if (data.err == 0) {
          that.submit();
          if (jQuery('.photostudio').length > 0) { //修图方，弹窗，倒计时
            window.location.href = '/';
          } else {
            window.location.href = '/';
          }
          return true;
        } else if (data.err == 1) {
          jQuery.each(data.msg, function (k, v) {
            //jQuery('#'+k).attr('placeholder',v[0]).val('').focus();
            jQuery('#' + k).parent().siblings().find('.Validform_checktip').removeClass('Validform_right').addClass('Validform_wrong');
            jQuery('#' + k).parent().siblings().find('.Validform_checktip').html(v[0]);
            jQuery('#' + k).focus();
            //jQueryvalidate.check();
          });
          return false;
        }
      },
      error: function (data) {
        return false;
      }
    });
  });
  jQuery('.list_type a:eq(0)').on('click', function () {
    jQuery(".digstudio").remove();
    jQuery(".content").show();
    jQuery(".login_type").hide();
  });
  jQuery('.list_type a:eq(1)').on('click', function () {
    jQuery(".photostudio").remove();
    jQuery(".content").show();
    jQuery(".login_type").hide();
  });
//        jQuery("#Flogin").Validform();
});
