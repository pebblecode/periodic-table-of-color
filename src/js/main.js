var colorList = $( '#js-color-list' );


for (var i = colorData.length - 1; i >= 0; i--) {
  var name = colorData[ i ].name,
      hex = colorData[ i ].hex,
      red = colorData[ i ].r,
      green = colorData[ i ].g
      blue = colorData[ i ].b,
      hue = colorData[ i ].h,
      saturation = colorData[ i ].s,
      lightness = colorData[ i ].l;
  var textColor, boldness;

  if ( lightness >= 0.42 ) {
    textColor = 'dark';
  } else {
    textColor = 'light';
  }

  if ( saturation > 0.75 ) {
    boldness = 'bold';
  } else {
    boldness = 'dull';
  }

  colorList.append( '<li class="color-item '+textColor+' '+boldness+'" style="background-color:'+hex+'"><div class="color-info"><span class="color-hex">'+hex+'</span><span class="color-name">'+name+'</span><span class="color-red">'+red+'</span><span class="color-green">'+green+'</span><span class="color-blue">'+blue+'</span><span class="color-hue">'+Math.round(hue)+'</span><span class="color-saturation">'+Math.round(saturation*100)+'</span><span class="color-lightness">'+Math.round(lightness*100)+'</span></div></li>' );
};

colorList.isotope({
  itemSelector: '.color-item',
  layoutMode: 'masonry',
  sortAscending: false,
  // transitionDuration: '5s',
  getSortData: {
    name: ".color-name",
    hue: ".color-hue parseInt",
    saturation: ".color-saturation parseInt",
    lightness: ".color-lightness parseInt",
    red: ".color-red parseInt",
    blue: ".color-blue parseInt",
    green: ".color-green parseInt"
  }
})

colorList.isotope({sortby: ['name']});

$( '.option-btn' ).click( function () {
  var sortByValue = $( this ).attr( 'data-sort-by' );
  colorList.isotope({ sortBy: sortByValue });

  if ( sortByValue == 'name' ) {
    colorList.isotope({ sortAscending: true });
  } else {
    colorList.isotope({ sortAscending: false });
  }


  $( '.active' ).removeClass( 'active' );
  $( this ).addClass( 'active' );
})