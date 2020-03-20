function first() {
  layer.open({
    type: 2,
    title: !1,
    shadeClose: !0,
    skin: "tryP",
    area: ["760px", "420px"],
    anim: 2,
    content: ["/site/recommend", "no"]
  })
}
function limit() {
  priceHide();
  layer.open({
    type: 1,
    title: !1,
    shadeClose: !0,
    skin: "limit",
    area: ["900px", "560px"],
    anim: 2,
    content: jQuery('#limit'),
    cancel: function () {
      priceShow();
    }
  })
}
function price() {
  priceHide();
  layer.open({
    type: 1,
    title: !1,
    shadeClose: !0,
    skin: "price",
    area: ["680px", "440px"],
    anim: 2,
    content: jQuery('#price'),
    cancel: function () {
      priceShow();
    }
  })
}
function priceShow() {
  if (jQuery('.price02').length > 0) {
    jQuery('.price01').hide();
    jQuery('.price02').show();
  } else {
    jQuery('.price01').show();
    jQuery('.price02').hide();
  }
}
function priceHide() {
  jQuery('.price01').hide();
  jQuery('.price02').hide();
}
function timeOut() {
  if (jQuery('#limit').length > 0) {
    jQuery('.btn-join').off('click');
    jQuery('.time').remove();
    jQuery('.price-T').text('600');
    jQuery('.price01').show();
    jQuery('.price02').remove();
    layer.closeAll();
  } else {
    jQuery('.price-limit .price-ttl').remove();
    jQuery('.price-limit input').prop('value', '699');
    jQuery('.price-limit .text span:last').html('699.00元');
    layer.msg('活动结束');
  }
}
//单纯分钟和秒倒计时
function resetTime(time) {
  var timer = null;
  var t = time;
  var m = 0;
  var s = 0;
  m = Math.floor(t / 60 % 60);
  m < 10 && (m = '0' + m);
  s = Math.floor(t % 60);
  function countDown() {
    s--;
    s < 10 && (s = '0' + s);
    if (s.length >= 3) {
      s = 59;
      m = "0" + (Number(m) - 1);
    }
    if (m.length >= 3) {
      m = '00';
      s = '00';
      clearInterval(timer);
    }
    if (m == 0 && s == 0) {
      // alert('GG')
      timeOut();
      clearInterval(timer);
    }
    jQuery('.time-limit').text(m + '分：' + s + '秒')
  }
  timer = setInterval(countDown, 1000);
}
if (jQuery('.btn-join').length > 0) {
  jQuery('.btn-join').on('click', function () {
    layer.closeAll();
    price();
    return false;
  })
}
if (jQuery('.btn-back').length > 0) {
  jQuery('.btn-back').on('click', function () {
    layer.closeAll();
    limit();
    return false;
  })
}




