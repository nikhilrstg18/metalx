"use strict";var KTCardDraggable={init:function(){var a=document.querySelectorAll(".draggable-zone");if(0===a.length)return!1;new Sortable.default(a,{draggable:".draggable",handle:".draggable .draggable-handle",mirror:{appendTo:"body",constrainDimensions:!0}})}};jQuery(document).ready((function(){KTCardDraggable.init()}));
//# sourceMappingURL=draggable.js.map
