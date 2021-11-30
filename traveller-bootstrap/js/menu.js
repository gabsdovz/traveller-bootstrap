var tsw_demo_font_is_large = false ;
function tsw_demo_change_font_size( )
{
  demo_paragraph = document.getElementById( 'demo' );
  if (!tsw_demo_font_is_large) {
    demo_paragraph.style.fontSize = "200%" ;
    tsw_demo_font_is_large = true ;
  }
  else {
    demo_paragraph.style.fontSize = "100%" ;
    tsw_demo_font_is_large = false ;
  }
}
