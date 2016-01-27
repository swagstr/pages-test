function setcookie( name, value, expiry, path ) {
  if(expiry) {
    var now = new Date();
    now.setTime( now.getTime() + Math.round(86400000*expiry) );
    expiry = now.toGMTString();
  }
  expiry = expiry ? '; expires=' + expiry : '';
  path = path ?'; path=' + path:'';
  document.cookie = name + '=' + escape(value) + expiry + path;
}
function getcookie( name ) {
  var cookie = document.cookie;
  if( cookie.indexOf( name + '=' ) < 0 ) { return null; }
  var start = cookie.indexOf( name + '=' ) + name.length + 1;
  var finish = cookie.substring( start, cookie.length );
  finish = ( finish.indexOf( ';' ) < 0 ) ? cookie.length : start + finish.indexOf( ';' );
  return unescape( cookie.substring( start, finish ) );
}
function setsheet( name ) {
  var l = document.getElementsByTagName( 'link' ), i, o, t;
  for( i=0; (o = l[i]); i++ ) {
    if( 'alternate stylesheet'===o.getAttribute( 'rel' ) && ( t = o.getAttribute( 'title' ) ) ) {
      o.disabled = true; // browser bug: will not enable on next line otherwise
      o.disabled = ( t !== name );
} } }
function setstyle( list ) {
 var name;
 if( ( name = list.options[ list.selectedIndex ].value ) ) {
  setcookie( 'style', name, 90, '/' );
  setsheet( name );
} }
// do this before the <body> opening tag and the user will see no flickering
if( ( name = getcookie( 'style' ) ) ) {
  setsheet( name );
}