(function () { 'use strict';

  var colorList = $( '#js-color-list' );


  for (var i = colorData.length - 1; i >= 0; i--) {
    colorList.append( '<li class="color-item" style="background-color:'+colorData[ i ].hex+'"><div class="color-info"><span class="color-name">'+colorData[ i ].name+'</span><span class="color-hex">'+colorData[ i ].hex+'</span></div></li>' );
  };

}()); // end 'use strict'