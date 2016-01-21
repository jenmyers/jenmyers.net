$('p').each(function(){
  var string = $(this).html();
  string = string.replace(/\s([^\s<]+)\s*$/,'\u00A0$1');
  $(this).html(string);
});
